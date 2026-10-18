import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

export const alt = `${site.name} — ${site.role}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  const [semibold, regular, mono, portrait] = await Promise.all([
    readFile(join(process.cwd(), 'assets', 'fonts', 'Geist-SemiBold.ttf')),
    readFile(join(process.cwd(), 'assets', 'fonts', 'Geist-Regular.ttf')),
    readFile(join(process.cwd(), 'assets', 'fonts', 'GeistMono-Regular.ttf')),
    readFile(join(process.cwd(), 'public', 'images', 'denis-jesus-palma-abanto.jpg')),
  ])

  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%', background: '#000', position: 'relative' }}>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img
          src={`data:image/jpeg;base64,${portrait.toString('base64')}`}
          width={935}
          height={760}
          style={{ position: 'absolute', left: 445, top: -14 }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            background:
              'linear-gradient(90deg, #000 0%, #000 42%, rgba(0,0,0,0.55) 62%, rgba(0,0,0,0) 80%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 180,
            display: 'flex',
            background: 'linear-gradient(0deg, #000 10%, rgba(0,0,0,0))',
          }}
        />
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '68px 72px',
            width: '100%',
            height: '100%',
          }}
        >
          <div style={{ display: 'flex', fontFamily: 'Geist Mono', fontSize: 26, color: '#a3a3a3', letterSpacing: 2 }}>
            {site.mark}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontFamily: 'Geist',
                fontWeight: 600,
                fontSize: 82,
                lineHeight: 1,
                letterSpacing: -3.6,
                color: '#ededed',
              }}
            >
              <span>Denis Jesus</span>
              <span>Palma Abanto</span>
            </div>
            <div style={{ display: 'flex', marginTop: 26, fontFamily: 'Geist', fontSize: 32, color: '#a3a3a3' }}>
              {site.role}
            </div>
            <div
              style={{
                display: 'flex',
                marginTop: 40,
                fontFamily: 'Geist Mono',
                fontSize: 20,
                color: '#8a8a8a',
                letterSpacing: 2,
                textTransform: 'uppercase',
              }}
            >
              denis.pe
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Geist', data: semibold, weight: 600, style: 'normal' },
        { name: 'Geist', data: regular, weight: 400, style: 'normal' },
        { name: 'Geist Mono', data: mono, weight: 400, style: 'normal' },
      ],
    },
  )
}
