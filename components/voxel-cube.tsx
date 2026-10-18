'use client'

import { useEffect, useRef } from 'react'

/*
 * Isometric voxel cube, drawn on a canvas. Voxels slide one cell at a time
 * into empty neighbours, the same motif as the old 2.6 MB hero video but
 * vector-sharp at any size and a few KB of JS. Pauses off-screen, renders a
 * still frame for prefers-reduced-motion, and stirs faster on hover.
 *
 * The backing store tracks the real device-pixel size (DPR 3 phones, browser
 * zoom, moving between monitors), and vertical edges are snapped to the pixel
 * grid so the lines stay as crisp as the surrounding text.
 */

const N = 6
const EMPTY_RATIO = 0.3
const MOVE_MS = 560
const COS30 = Math.cos(Math.PI / 6)
const MAX_DPR = 3

const EDGE = 'rgba(255,255,255,0.88)'
const INNER = 'rgba(255,255,255,0.5)'
const FILL_TOP = '#111111'
const FILL_LEFT = '#080808'
const FILL_RIGHT = '#020202'
const INSETS_TOP = [0.15, 0.28, 0.39]
const INSETS_LEFT = [0.3]
const INSETS_RIGHT = [0.2, 0.34]

const DIRS = [
  [1, 0, 0],
  [-1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, 1],
  [0, 0, -1],
] as const

type Point = readonly [number, number]

type Voxel = {
  /** cell it occupies, or is moving into */
  x: number
  y: number
  z: number
  /** cell it is moving from */
  fx: number
  fy: number
  fz: number
  /** move start (ms), -1 when at rest */
  start: number
  key: number
}

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2)

export function VoxelCube({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const at = (x: number, y: number, z: number) => x + N * (y + N * z)
    const inside = (v: number) => v >= 0 && v < N
    const isResting = (x: number, y: number, z: number) => inside(x) && inside(y) && inside(z) && resting[at(x, y, z)] === 1

    const reserved = new Uint8Array(N ** 3) // occupied, or claimed by a voxel moving in
    const resting = new Uint8Array(N ** 3) // holds a voxel at rest (drives face culling)
    const voxels: Voxel[] = []

    for (let z = 0; z < N; z++)
      for (let y = 0; y < N; y++)
        for (let x = 0; x < N; x++) {
          if (Math.random() < EMPTY_RATIO) continue
          voxels.push({ x, y, z, fx: x, fy: y, fz: z, start: -1, key: 0 })
          reserved[at(x, y, z)] = 1
          resting[at(x, y, z)] = 1
        }

    let active = 0
    let boost = false

    function startMove(now: number) {
      for (let attempt = 0; attempt < 32; attempt++) {
        const v = voxels[(Math.random() * voxels.length) | 0]
        if (v.start >= 0) continue
        // Fully buried voxels would move out of sight; pick a visible one.
        if (isResting(v.x + 1, v.y, v.z) && isResting(v.x, v.y + 1, v.z) && isResting(v.x, v.y, v.z + 1)) continue
        const [dx, dy, dz] = DIRS[(Math.random() * DIRS.length) | 0]
        const nx = v.x + dx
        const ny = v.y + dy
        const nz = v.z + dz
        if (!inside(nx) || !inside(ny) || !inside(nz) || reserved[at(nx, ny, nz)]) continue
        resting[at(v.x, v.y, v.z)] = 0
        reserved[at(nx, ny, nz)] = 1
        v.fx = v.x
        v.fy = v.y
        v.fz = v.z
        v.x = nx
        v.y = ny
        v.z = nz
        v.start = now
        active++
        return
      }
    }

    function settle(now: number) {
      for (const v of voxels) {
        if (v.start < 0 || now - v.start < MOVE_MS) continue
        v.start = -1
        reserved[at(v.fx, v.fy, v.fz)] = 0
        resting[at(v.x, v.y, v.z)] = 1
        active--
      }
    }

    let w = 0 // CSS px
    let h = 0
    let scale = 1 // device px per CSS px
    let s = 0 // voxel edge, CSS px
    let stepX = 0 // horizontal screen step per unit of (X - Z), snapped to device px
    let cx = 0
    let cy = 0
    let edgeWidth = 1
    let innerWidth = 1

    /** Round a CSS length to whole device pixels (at least `min` of them). */
    const snap = (cssPx: number, min = 1) => Math.max(min, Math.round(cssPx * scale)) / scale

    function resize(deviceSize?: { inlineSize: number; blockSize: number }) {
      const rect = canvas!.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR)
      const bw = Math.min(deviceSize?.inlineSize ?? Math.round(rect.width * dpr), Math.round(rect.width * MAX_DPR))
      const bh = Math.min(deviceSize?.blockSize ?? Math.round(rect.height * dpr), Math.round(rect.height * MAX_DPR))
      w = rect.width
      h = rect.height
      scale = bw / w
      if (canvas!.width !== bw) canvas!.width = bw
      if (canvas!.height !== bh) canvas!.height = bh
      ctx!.setTransform(bw / w, 0, 0, bh / h, 0, 0)
      ctx!.lineJoin = 'round'

      s = Math.min(w / (2 * COS30 * N), h / (2 * N)) * 0.94
      edgeWidth = snap(Math.max(1, s * 0.04))
      innerWidth = snap(Math.max(0.75, s * 0.022))
      stepX = Math.round(COS30 * s * scale) / scale
      // Centre on a pixel boundary, plus half a pixel when the edge is an odd
      // number of device pixels wide, so vertical edges cover whole pixels.
      const half = Math.round(edgeWidth * scale) % 2 ? 0.5 : 0
      cx = (Math.round((w / 2) * scale) + half) / scale
      cy = h / 2
    }

    const project = (X: number, Y: number, Z: number): Point => [
      cx + (X - Z) * stepX,
      cy + ((X + Z) * 0.5 - Y) * s,
    ]

    function face(a: Point, b: Point, c: Point, d: Point, fill: string, insets: number[]) {
      ctx!.beginPath()
      ctx!.moveTo(a[0], a[1])
      ctx!.lineTo(b[0], b[1])
      ctx!.lineTo(c[0], c[1])
      ctx!.lineTo(d[0], d[1])
      ctx!.closePath()
      ctx!.fillStyle = fill
      ctx!.fill()
      ctx!.strokeStyle = EDGE
      ctx!.lineWidth = edgeWidth
      ctx!.stroke()

      // Inset squares; faces are parallelograms, so q(u,v) = a + u(b-a) + v(d-a)
      const ux = b[0] - a[0]
      const uy = b[1] - a[1]
      const vx = d[0] - a[0]
      const vy = d[1] - a[1]
      ctx!.beginPath()
      for (const t of insets) {
        const t2 = 1 - t
        ctx!.moveTo(a[0] + t * ux + t * vx, a[1] + t * uy + t * vy)
        ctx!.lineTo(a[0] + t2 * ux + t * vx, a[1] + t2 * uy + t * vy)
        ctx!.lineTo(a[0] + t2 * ux + t2 * vx, a[1] + t2 * uy + t2 * vy)
        ctx!.lineTo(a[0] + t * ux + t2 * vx, a[1] + t * uy + t2 * vy)
        ctx!.closePath()
      }
      ctx!.strokeStyle = INNER
      ctx!.lineWidth = innerWidth
      ctx!.stroke()
    }

    function dots(points: Point[]) {
      ctx!.beginPath()
      const r = Math.max(edgeWidth * 1.1, s * 0.045)
      for (const p of points) {
        ctx!.moveTo(p[0] + r, p[1])
        ctx!.arc(p[0], p[1], r, 0, Math.PI * 2)
      }
      ctx!.fillStyle = EDGE
      ctx!.fill()
    }

    function draw(now: number) {
      ctx!.clearRect(0, 0, w, h)
      const half = N / 2

      for (const v of voxels) {
        if (v.start < 0) {
          v.key = v.x + v.y + v.z
        } else {
          const e = ease(Math.min(1, (now - v.start) / MOVE_MS))
          v.key = v.fx + v.fy + v.fz + (v.x + v.y + v.z - v.fx - v.fy - v.fz) * e
        }
      }
      voxels.sort((a, b) => a.key - b.key)

      for (const v of voxels) {
        let px = v.x
        let py = v.y
        let pz = v.z
        let showTop = true
        let showLeft = true
        let showRight = true

        if (v.start >= 0) {
          const e = ease(Math.min(1, (now - v.start) / MOVE_MS))
          px = v.fx + (v.x - v.fx) * e
          py = v.fy + (v.y - v.fy) * e
          pz = v.fz + (v.z - v.fz) * e
        } else {
          showTop = !isResting(v.x, v.y + 1, v.z)
          showRight = !isResting(v.x + 1, v.y, v.z)
          showLeft = !isResting(v.x, v.y, v.z + 1)
          if (!showTop && !showLeft && !showRight) continue
        }

        const X = px - half
        const Y = py - half
        const Z = pz - half
        const p010 = project(X, Y + 1, Z)
        const p110 = project(X + 1, Y + 1, Z)
        const p111 = project(X + 1, Y + 1, Z + 1)
        const p011 = project(X, Y + 1, Z + 1)
        const p100 = project(X + 1, Y, Z)
        const p101 = project(X + 1, Y, Z + 1)
        const p001 = project(X, Y, Z + 1)

        const corners: Point[] = []
        if (showTop) {
          face(p010, p110, p111, p011, FILL_TOP, INSETS_TOP)
          corners.push(p010, p110, p111, p011)
        }
        if (showLeft) {
          face(p001, p101, p111, p011, FILL_LEFT, INSETS_LEFT)
          corners.push(p001, p101, p111, p011)
        }
        if (showRight) {
          face(p100, p110, p111, p101, FILL_RIGHT, INSETS_RIGHT)
          corners.push(p100, p110, p111, p101)
        }
        dots(corners)
      }
    }

    let raf = 0
    let running = false
    let visible = false
    let lastSpawn = 0

    function frame(now: number) {
      const every = boost ? 32 : 90
      const max = boost ? 20 : 8
      if (now - lastSpawn > every && active < max) {
        startMove(now)
        lastSpawn = now
      }
      settle(now)
      draw(now)
      raf = requestAnimationFrame(frame)
    }

    function sync() {
      const shouldRun = !reduceMotion && visible && document.visibilityState === 'visible'
      if (shouldRun && !running) {
        running = true
        raf = requestAnimationFrame(frame)
      } else if (!shouldRun && running) {
        running = false
        cancelAnimationFrame(raf)
      }
    }

    const redraw = (deviceSize?: { inlineSize: number; blockSize: number }) => {
      resize(deviceSize)
      if (!running) draw(performance.now())
    }

    redraw()

    // device-pixel-content-box also fires on zoom / DPR changes (Chromium, Firefox)
    const ro = new ResizeObserver(([entry]) => redraw(entry.devicePixelContentBoxSize?.[0]))
    try {
      ro.observe(canvas, { box: 'device-pixel-content-box' })
    } catch {
      ro.observe(canvas)
    }

    // Safari: watch the resolution media query instead
    let dprQuery: MediaQueryList | null = null
    const onDprChange = () => {
      redraw()
      watchDpr()
    }
    const watchDpr = () => {
      dprQuery?.removeEventListener('change', onDprChange)
      dprQuery = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`)
      dprQuery.addEventListener('change', onDprChange)
    }
    watchDpr()

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      sync()
    })
    io.observe(canvas)

    const onEnter = () => (boost = true)
    const onLeave = () => (boost = false)
    canvas.addEventListener('pointerenter', onEnter)
    canvas.addEventListener('pointerleave', onLeave)
    document.addEventListener('visibilitychange', sync)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      dprQuery?.removeEventListener('change', onDprChange)
      canvas.removeEventListener('pointerenter', onEnter)
      canvas.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', sync)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
