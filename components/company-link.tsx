import { site } from '@/lib/site'

/** Inline link to the current employer. */
export function CompanyLink() {
  return (
    <a
      href={site.company.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-fg underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-fg"
    >
      {site.company.name}
    </a>
  )
}
