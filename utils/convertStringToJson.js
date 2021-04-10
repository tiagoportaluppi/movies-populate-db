exports.convertStringToJson = (data, formatReturn = '') => {
  if (!data) return [];

  const value = data
    .replace(new RegExp('"Orlenok", Central', 'g'), 'Orlenok Central')

    .replace(new RegExp("{'", 'g'), '{__')
    .replace(new RegExp("'}", 'g'), '__}')
    .replace(new RegExp("':", 'g'), '__:')
    .replace(new RegExp(": '", 'g'), ': __')
    .replace(new RegExp(", '", 'g'), ', __')
    .replace(new RegExp("',", 'g'), '__,')

    .replace(new RegExp('{"', 'g'), '{__')
    .replace(new RegExp('"}', 'g'), '__}')
    .replace(new RegExp('":', 'g'), '__:')
    .replace(new RegExp(': "', 'g'), ': __')
    .replace(new RegExp(', "', 'g'), ', __')
    .replace(new RegExp('",', 'g'), '__,')

    .replace(new RegExp('"', 'g'), "'")

    .replace(new RegExp('__', 'g'), '"')

    .replace(new RegExp('xa0', 'g'), '')
    .replace(new RegExp('\\\\', 'g'), '');

  // .replace(new RegExp("'", 'g'), '"')
  // .replace(new RegExp('"s ', 'g'), "'s ")
  // .replace(new RegExp('s" ', 'g'), "s' ")
  // .replace(new RegExp('n" ', 'g'), "n' ")
  // .replace(new RegExp('o" ', 'g'), "o' ")
  // .replace(new RegExp('d"e', 'g'), "d'e")
  // .replace(new RegExp('d"a', 'g'), "d'a")
  // .replace(new RegExp('o"h', 'g'), "o'h")
  // .replace(new RegExp('u"v', 'g'), "u'v")
  // .replace(new RegExp('r"s', 'g'), "r's")
  // .replace(new RegExp('e"s', 'g'), "e's")
  // .replace(new RegExp('P"A', 'g'), "P'A")
  // .replace(new RegExp('n"t', 'g'), "n't")
  // .replace(new RegExp('a"u', 'g'), "a'u")
  // .replace(new RegExp('l"i', 'g'), "l'i")
  // .replace(new RegExp('l"I', 'g'), "l'I")
  // .replace(new RegExp('L"I', 'g'), "L'I")
  // .replace(new RegExp('L"O', 'g'), "L'O")
  // .replace(new RegExp('L"A', 'g'), "L'A")
  // .replace(new RegExp('D"I', 'g'), "D'I")
  // .replace(new RegExp('d"I', 'g'), "d'I")
  // .replace(new RegExp('d"A', 'g'), "d'A")
  // .replace(new RegExp('d"O', 'g'), "d'O")
  // .replace(new RegExp('d"E', 'g'), "d'E")
  // .replace(new RegExp('D"P', 'g'), "D'P")
  // .replace(new RegExp('D"A', 'g'), "D'A")
  // .replace(new RegExp('D"O', 'g'), "D'O")
  // .replace(new RegExp('l"A', 'g'), "l'A")
  // .replace(new RegExp('l"E', 'g'), "l'E")
  // .replace(new RegExp('l"o', 'g'), "l'o")
  // .replace(new RegExp('w"s', 'g'), "w's")
  // .replace(new RegExp('v"e', 'g'), "v'e")
  // .replace(new RegExp('i"a', 'g'), "i'a")
  // .replace(new RegExp('d"é', 'g'), "d'é")
  // .replace(new RegExp('O"C', 'g'), "O'C")
  // .replace(new RegExp('"n"', 'g'), 'n')
  // .replace(new RegExp('"A"', 'g'), 'A')
  // .replace(new RegExp('"X"', 'g'), 'X')
  // .replace(new RegExp('xa0', 'g'), '')
  // .replace(new RegExp(' "84', 'g'), ' 84')
  // .replace(new RegExp('t "98', 'g'), 't 98')
  // .replace(new RegExp('\\\\', 'g'), '')
  // .replace(new RegExp('"trudy jackson"', 'g'), 'trudy jackson')
  // .replace(new RegExp('"comfort women"', 'g'), 'comfort women')
  // .replace(new RegExp('"Tor"', 'g'), 'Tor')
  // .replace(new RegExp('"Perspektywa"', 'g'), 'Perspektywa"')
  // .replace(new RegExp('"Kadr"', 'g'), 'Kadr')
  // .replace(new RegExp('"DIA"', 'g'), 'DIA')
  // .replace(new RegExp('"Johannisthal"', 'g'), 'Johannisthal')
  // .replace(new RegExp('"Kamera"', 'g'), 'Kamera')
  // .replace(new RegExp('"Zespol Filmowy"', 'g'), 'Zespol Filmowy')
  // .replace(new RegExp('ya "Mosfilm"', 'g'), 'ya Mosfilm')
  // .replace(new RegExp('""Mosfilm""', 'g'), 'Mosfilm')
  // .replace(new RegExp('"Pryzmat"', 'g'), 'Pryzmat')
  // .replace(new RegExp('"Silesia"', 'g'), 'Silesia')
  // .replace(new RegExp('"Oko"', 'g'), 'Oko')
  // .replace(new RegExp('"Plan"', 'g'), 'Plan')
  // .replace(new RegExp('"Syrena"', 'g'), 'Syrena')
  // .replace(new RegExp('a""', 'g'), 'a"');

  switch (formatReturn) {
    case 'array':
      return value.startsWith('[') ? JSON.parse(value) : [];
    case 'object':
      return value.startsWith('{') ? JSON.parse(value) : {};
    default:
      return value;
  }
};
