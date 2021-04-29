export function capitalizeObjectKeys(obj) {
  const arr = Object.keys(obj);
  return arr.map(n => n.toUpperCase());
  
}

export function sortedKeys(obj) {
  const arr = Object.keys(obj);
  return arr.sort((a, b) => a.length - b.length);
}

export function getFilteredKey(obj) {
  const arr = Object.keys(obj);
  console.log(arr);
  return arr.map(arr.filter(n => n.age));
}

export function getArrayOfKeysAndValues(obj) {
  const arr = Object.entries(obj);
  return arr;
}

export function sortedArraysByValuesLength(obj) {
  const arr = Object.entries(obj);
  return arr.sort((a, b) => a.length - b.length);
}

