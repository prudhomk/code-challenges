export function doubleNumbers(arr) {

  return arr.map(n => n * 2);
}

export function stringItUp(arr) {
  return arr.map(n => `${n}`);
}

export function captializeNames(arr) {
  return arr.map(n => {
    const lower = n.toLowerCase();
    return (lower.charAt(0).toUpperCase() + lower.slice(1)) ;
  }); 
}

export function namesOnly(arr) {
  return arr.map(n => n.name);
}

export function makeStrings(arr) {
  return arr.map(n => {
    if (n.age < 18) return `${n.name} is under age!!`;
    else return `${n.name} can go to The Matrix`;
  });
}

export function readyToPutInTheDOM(arr) {
  return arr.map(n => `<h1>${n.name}</h1><h2>${n.age}</h2>`);
}