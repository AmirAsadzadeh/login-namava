export function toPersianDigits(input) {
  var id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(input).replace(/[0-9]/g, function (w) {
    return id[+w];
  });
}
