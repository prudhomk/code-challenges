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
  let character = 0;
  Object.entries(arr).forEach(n => {
    console.log(n);
    if (n.spouse === '') {
      character++;
    } else if (n.children[0].length > 0) {
      character = character + character.children.length;
    } else {
      character++;
    }
      
  });
  return character;
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
  arr.sort((a, b) => {
    if (a.children.length < b.children.length) {
      return -1;
    } else {
      return 1;
    }
  });
  console.log(arr);
  return arr;
}