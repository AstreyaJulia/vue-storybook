/** Форматирует размер файла в байтах в размер в кило, мега и т.д.
 * @param byte - число байт
 * @returns {string}
 */
export function formatFileSizeShort(byte) {
  if (parseInt(byte, 10) < 1024) {
    return `${parseInt(byte, 10)} байт`
  }
  if (parseInt(byte, 10) <= 1048576) {
    return `${Math.round(parseInt(byte, 10) / 1024)} КБ`
  }
  if (parseInt(byte, 10) > 1048576 && parseInt(byte, 10) <= 1073741824) {
    return `${Math.round(parseInt(byte, 10) / 1048576)} МБ`
  }
  if (parseInt(byte, 10) > 1073741824) {
    return `${Math.round(parseInt(byte, 10) / 1073741824)} ГБ`
  }
  return ''
}
