export function toPersianDate(date, config) {
  return new Intl.DateTimeFormat("fa-IR", config).format(new Date(date));
}
