exports.convertStringToJson = (data, formatReturn = '') => {
  if (!data) return [];

  const value = data
    .replace(new RegExp('"Orlenok", Central', 'g'), 'Orlenok Central')
    // .replace(new RegExp(", 'The Snake'", 'g'), ' (The Snake)')
    // .replace(new RegExp("'Fine Art',", 'g'), '"Fine Art"')
    // .replace(new RegExp(', "Juno"', 'g'), ' (Juno)')
    // .replace(new RegExp("'Damian',", 'g'), 'Damian,')
    // .replace(new RegExp("Amleto, 'il", 'g'), 'Amleto, il')
    // .replace(new RegExp("'Pops', the", 'g'), 'Pops, the')
    // .replace(new RegExp("Cutter, 'Mo'", 'g'), 'Cutter (Mo)')
    // .replace(new RegExp("Footman, 'L'Age D'Or'", 'g'), "Footman (L'Age D'Or)")
    // .replace(new RegExp("'Medieval World'", 'g'), 'Medieval World')
    // .replace(new RegExp("Ron 'Ronny',", 'g'), 'Ron Ronny,')
    // .replace(new RegExp(', "Tatar"', 'g'), ' (Tatar)')
    // .replace(new RegExp(', "Plommonet"', 'g'), ' (Plommonet)')
    // .replace(new RegExp("Person: 'The", 'g'), "Person - 'The")

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

    .replace(new RegExp('None', 'g'), 'null')
    .replace(new RegExp('xa0', 'g'), '')
    .replace(new RegExp('\\\\', 'g'), '');

  switch (formatReturn) {
    case 'array':
      return value.startsWith('[') ? JSON.parse(value) : [];
    case 'object':
      return value.startsWith('{') ? JSON.parse(value) : {};
    default:
      return value;
  }
};
