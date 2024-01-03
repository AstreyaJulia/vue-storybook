/** Получает первую букву имени из Фамилии Имени
 * @param name - фамилия имя отчество
 * @returns {*}
 */
export function getSecondCharacter(name) {
  return (
    name &&
    name
      .split(' ')
      .slice(1, -1)
      .map((n) => n[0])
      .join('')
  )
}

/** Генерирует цвет по первой букве имени
 * @param name - имя
 * @returns {string[]} - цвет, строка
 */
export function getAvatarColor(name) {
  const letterColors = [
    {
      color: 'blue',
      letters: ['F', 'E', 'T', 'J', 'Г', 'И', 'Р', 'Т', 'Ь', 'Ъ']
    },
    {
      color: 'teal',
      letters: ['3', '8', 'K', 'Y', 'B', 'O', 'Д', 'К', 'О', 'В']
    },
    {
      color: 'violet',
      letters: ['2', '7', 'P', 'R', 'S', 'U', 'Е', 'П', 'Щ', 'Ь']
    },
    {
      color: 'cyan',
      letters: ['4', '9', 'G', 'D', 'I', 'Ж', 'Й', 'Ф', 'Б', 'Н']
    },
    { color: 'indigo', letters: ['A', 'N', 'H', 'L', 'А', 'Л', 'Ю', 'Ы', 'Э'] },
    {
      color: 'rose',
      letters: ['0', '5', 'W', 'M', 'М', 'Ш', 'Х', 'У', 'Ц', 'Ё', 'Я']
    },
    {
      color: 'orange',
      letters: ['1', '6', 'V', 'X', 'Z', 'Q', 'З', 'Ч', 'C', 'С']
    }
  ]

  return (
    letterColors.find((letter) =>
      letter.letters.filter((letter) => letter === getSecondCharacter(name.toUpperCase()))
    ).color || 'blue'
  )
}

/** Получает из полного ФИО инициалы, начиная с 2 элемента (только имя и отчество)
 * @param name - фамилия имя отчество
 * @returns {string}
 */
export function getInitialsOnly(name) {
  return (
    name &&
    name
      .split(' ')
      .slice(1)
      .map((n) => n[0])
      .join('')
      .toUpperCase()
  )
}

/** Получает из полного ФИО, фамилию + инициалы
 * @param name - фамилия имя отчество
 * @returns {string}
 */
export function getInitials(name) {
  return (
    name &&
    `${name.split(' ').slice(0, 1)} ${name
      .split(' ')
      .slice(1)
      .map((n) => n[0])
      .join('. ')
      .toUpperCase()}`
  )
}
