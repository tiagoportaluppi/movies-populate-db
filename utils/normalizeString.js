exports.normalizeString = (data) => {
  if (!data) return '';

  const value = String(data).replace(new RegExp('"', 'g'), "'");

  return value;
};
