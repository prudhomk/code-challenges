export function getHouses(obj) {
  const arr = Object.values(obj);
  return arr.map(n => n.house);
}

export function updateNumbers(obj) {
  const arr = Object.entries(obj);
  return arr.toString();
}

export function totalCharacters(arr) {
  
  return arr.length;
}

export function hasChildrenEntries(arr, character) {
  
  arr.filter(n => n.children === true);
  return arr;
} 

export function sortByChildren(arr){

} 