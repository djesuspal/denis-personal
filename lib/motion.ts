import type { CSSProperties } from 'react'

/** Entrance delay for elements using `animate-rise stagger`. */
export const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties
