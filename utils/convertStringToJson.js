exports.convertStringToJson = (data) => {
  const response = data
    .replace(new RegExp("'", 'g'), '"')
    .replace(new RegExp('"s ', 'g'), "'s ")
    .replace(new RegExp('s" ', 'g'), "s' ")
    .replace(new RegExp('d"e', 'g'), "d'e")
    .replace(new RegExp('d"a', 'g'), "d'a")
    .replace(new RegExp('o"h', 'g'), "o'h")
    .replace(new RegExp('u"v', 'g'), "u'v")
    .replace(new RegExp('r"s', 'g'), "r's")
    .replace(new RegExp('a"u', 'g'), "a'u")
    .replace(new RegExp('l"i', 'g'), "l'i")
    .replace(new RegExp('"n"', 'g'), 'n')
    .replace(new RegExp('xa0', 'g'), '')
    .replace(new RegExp('\\\\', 'g'), '')
    .replace(new RegExp('"trudy jackson"', 'g'), 'trudy jackson')
    .replace(new RegExp('"comfort women"', 'g'), 'comfort women')

  return JSON.parse(response)
}
