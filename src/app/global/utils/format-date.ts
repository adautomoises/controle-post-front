export function formatDateToPTBR(date: string): string {
  const [years, months, days] = date.split('-');

  return `${days}/${months}/${years}`;
}
