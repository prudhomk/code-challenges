
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
  return recipe.ingredients.map(n => n.split(' ').splice(2).join(' '));
}

export function stepActions(recipe) {
  return recipe.steps.map(n => n.split(' ').splice(0, 1)[0]);
}

export function removeLastCharacters(str, numberOfCharacters) {
  return str.substring(0, str.length - numberOfCharacters);
}

