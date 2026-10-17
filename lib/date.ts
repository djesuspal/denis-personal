const longDate = new Intl.DateTimeFormat('es-PE', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})

/** "2024-11-03" -> "3 de noviembre de 2024" */
export const formatDate = (iso: string) => longDate.format(new Date(`${iso}T00:00:00Z`))
