import { howMuchPencil, wordsToCharList, listFoods, stepActions, removeLastCharacters, totalSumCSV, removeVowels, extractVowels } from './array-methods';

test('It should return a list of shortening words', () => {
  expect(howMuchPencil('Welcome')).toStrictEqual(['Welcome', 'elcome', 'lcome', 'come', 'ome', 'me', 'e', '']);
  expect(howMuchPencil('Welcome').length).toStrictEqual(8);
  expect(howMuchPencil('')).toStrictEqual(['']);
  expect(howMuchPencil('abc')).toStrictEqual(['abc', 'bc', 'c', '']);
});


test('It should return a set of characters', () => {
  expect(wordsToCharList('Gregor')).toStrictEqual(['G', 'r', 'e', 'g', 'o', 'r']);
  expect(wordsToCharList('Gregor').length).toStrictEqual(6);
  expect(wordsToCharList('hooray')).toStrictEqual(['h', 'o', 'o', 'r', 'a', 'y']);
  expect(wordsToCharList('')).toStrictEqual([]);
});


test.only('It should return a list of items', () => {
  expect(listFoods('gruffaloCrumble')).toStrictEqual(['Gruffalo', 'oats', 'brown sugar', 'flour', 'pure maple syrup', 'chopped nuts', 'baking soda', 'baking powder', 'cinnamon', 'melted butter', 'fresh water']);
    
});

test('It should return step actions', () => {
  expect(stepActions('gruffaloCrumble')).toStrictEqual(['Pre-heat', 'De-prickle', 'Sprinkle', 'Mix', 'Grease', 'Combine', 'Fold', 'Spread', 'Bake']);
    
});

test('It should remove last characters', () => {
  expect(removeLastCharacters('Gregor', 2)).toStrictEqual('Greg');
  expect(removeLastCharacters('hello', -1)).toStrictEqual('hello');
  expect(removeLastCharacters('wowow', -700)).toStrictEqual('wowow');
  expect(removeLastCharacters('hello', 12)).toStrictEqual('');
  expect(removeLastCharacters('', 1)).toStrictEqual('');
  expect(removeLastCharacters('a', 1)).toStrictEqual('');
});
