function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b
  })

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null
}

function luminance(color) {
  const rgbColor = hexToRgb(color)
  const a = [rgbColor.r, rgbColor.g, rgbColor.b].map(function (v) {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
}

function colorContrastRatio(color1, color2, mode) {
  const color1luminance = luminance(color1)
  const color2luminance = luminance(color2)
  const ratio =
    color1luminance > color2luminance
      ? (color2luminance + 0.05) / (color1luminance + 0.05)
      : (color1luminance + 0.05) / (color2luminance + 0.05)
  let result = {
    AA: null,
    AAA: null,
    pass: null
  }
  const rate = (1 / ratio).toFixed(2)
  switch (mode) {
    case 'normal text':
      result['AAA'] = ratio < 1 / 7 ? `AAA ${rate}:1` : null
      result['AA'] = ratio <= 1 / 4.5 && ratio > 1 / 7 ? `AA ${rate}:1` : null
      result['pass'] = ratio > 1 / 4.5 ? `${rate}:1` : null
      return result

    case 'large text':
      result['AAA'] = ratio < 1 / 4.5 ? `AAA ${rate}:1` : null
      result['AA'] = ratio <= 1 / 3 && ratio > 1 / 4.5 ? `AA ${rate}:1` : null
      result['pass'] = ratio > 1 / 3 ? `${rate}:1` : null
      return result

    case 'interface':
      result['AA'] = ratio <= 1 / 3 ? `AA ${rate}:1` : null
      return result

    default:
      return result
  }
}

export { luminance, hexToRgb, colorContrastRatio }
