export function getHouses(obj) {
  const arr = Object.values(obj);
  return arr.map(n => n.house);
}

export function updateNumbers(obj) {
  const arr = [];
  Object.keys(obj).forEach(key => {
    arr.push(`${key}: ${obj[key]}`);
  });
  return arr;
}

export function totalCharacters(arr) {
  
  return arr.length;
}

export function hasChildrenEntries(arr, character) {
  let children = 0;
  Object.entries(arr).forEach(n => {
    n.forEach(name => {
      if (name.name === character) {
        children = name.children.length > 0 ? true : false;

      }
    });
  });
  
  return children;
} 

export function sortByChildren(arr){
  return arr.sort((a, b => {
    if (a.childrenlength < b.children.length) {
      return -1;
    }
    if (a.childrenlength > b.children.length) {
      return 1;
    }
  // a must be equal to b
    return 0;
  }));
} 