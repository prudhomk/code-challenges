export function howMuchPencil(str) {
  const arr = [];
  for (let i = 0; i <= str.length; i++) {
    arr.push(str.substring(i, str.length));
  }
  return arr;
}

export function wordsToCharList(arr) {
  return arr.split('');
}

export function listFoods(recipe) {
  const arr = [];
  arr.push(recipe.ingredients);
  console.log(arr);

}

export function stepActions(recipe) {
  
}

export function removeLastCharacters(str, numberOfCharacters) {
  return str.substring(0, str.length - numberOfCharacters);
}

//stretch goals

export function totalSumCSV(str) {

}

export function removeVowels(str) {

}

export function extractVowels(str) {
  
}