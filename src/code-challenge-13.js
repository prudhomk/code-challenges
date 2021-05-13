export const sortByChildren = (charArray) => {
  charArray.sort((a, b) => {
    if (a.children.length < b.children.length) {
      return -1;
    } else {
      return 1;
    }
  });
  return charArray;

};

export const containsW = (str) => {
  if (str.match(/w/)) return true;
  return false;
};

export const isNum = (input) => {
  const regex = /\d/;
  if (regex.test(input)) return true;
  return false;
};

export const containsWorld = (input) => {
  const regex = /world/;
  if (regex.test(input)) return true;
  return false;
};

export const isCapitalized = (str) => {
  const regex = /[A-Z]/;
  return str.match(regex);
  
};

export const citiesAtoJ = (arr) => {
  return arr.match(/^[A-J]/);
};