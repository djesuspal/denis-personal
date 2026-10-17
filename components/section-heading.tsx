export function SectionHeading({ index, children, id }: { index: string; children: string; id?: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-[11px] tracking-[0.16em] text-fg-subtle">{index}</span>
      <h2 id={id} className="text-xl font-semibold tracking-[-0.02em] text-fg">
        {children}
      </h2>
    </div>
  )
}
