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
  
};

export const containsWorld = (input) => {

};

export const isCapitalized = (str) => {

};

export const citiesAtoJ = (arr) => {

};