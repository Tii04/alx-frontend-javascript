export default function cleanSet(set, startString) {
  const empString = '';
  const arr = [];

  if (startString && typeof startString === 'string') {
    for (const element of set) {
      if (element && element.startsWith(startString)) {
        arr.push(element.slice(startString.length));
      }
    }
    return arr.join('-');
  }
  return empString;
}
