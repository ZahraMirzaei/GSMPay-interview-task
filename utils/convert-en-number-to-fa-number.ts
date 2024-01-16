export function convertToPersianNumber(number: string) {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return String(number).replace(
    /\d/g,
    (digit: string) => persianDigits[Number(digit)]
  );
}