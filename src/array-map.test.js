/* eslint-disable quotes */
import { doubleNumbers, stringItUp, captializeNames, namesOnly, makeStrings, readyToPutInTheDOM } from './array-map';

test.skip('doubles numbers', () => {
  const input = [2, 5, 100]; // arrange
  const output = doubleNumbers(input); // act
  expect(output).toEqual([4, 10, 200]); // assert
});

test.skip('string it up', () => {
  const input = [2, 5, 100];
  const output = stringItUp(input);
  expect(output).toEqual(["2", "5", "100"]);
});

test.skip('captialize names', () => {
  const input = ['john', 'JACOB', 'jinGleHeimer', 'schmidt'];
  const output = captializeNames(input);
  expect(output).toEqual(['John', 'Jacob', 'Jingleheimer', 'Schmidt']);
});

test.skip('names Only', () => {
  const input = [
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "Eric Jones",
      age: 2
    },
    {
      name: "Paris Hilton",
      age: 5
    },
    {
      name: "Kayne West",
      age: 16
    },
    {
      name: "Bob Ziroll",
      age: 100
    }
  ];
  const output = namesOnly(input);
  expect(output).toEqual([
    "Angelina Jolie", 
    "Eric Jones", 
    "Paris Hilton", 
    "Kayne West", 
    "Bob Ziroll"
  ]);
});

test.skip('make strings', () => {
  const input = [
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "Eric Jones",
      age: 2
    },
    {
      name: "Paris Hilton",
      age: 5
    },
    {
      name: "Kayne West",
      age: 16
    },
    {
      name: "Bob Ziroll",
      age: 100
    }
  ];
  const output = makeStrings(input);
  expect(output).toEqual([
    "Angelina Jolie can go to The Matrix", 
    "Eric Jones is under age!!", 
    "Paris Hilton is under age!!", 
    "Kayne West is under age!!", 
    "Bob Ziroll can go to The Matrix"
  ]);
});

test.skip('make headers', () => {
  const input = [
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "Eric Jones",
      age: 2
    },
    {
      name: "Paris Hilton",
      age: 5
    },
    {
      name: "Kayne West",
      age: 16
    },
    {
      name: "Bob Ziroll",
      age: 100
    }
  ];
  const output = readyToPutInTheDOM(input);
  expect(output).toEqual([
    "<h1>Angelina Jolie</h1><h2>80</h2>", 
    "<h1>Eric Jones</h1><h2>2</h2>", 
    "<h1>Paris Hilton</h1><h2>5</h2>", 
    "<h1>Kayne West</h1><h2>16</h2>", 
    "<h1>Bob Ziroll</h1><h2>100</h2>"
  ]);
});