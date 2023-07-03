type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
  const formatter = new Intl.DateTimeFormat(locales, { dateStyle })
  return formatter.format(new Date(date))
}

export function getColorForString(input: string): string {
  const hash = [...input].reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  return `hsl(${hash % 360}, 95%, 35%)`;
}