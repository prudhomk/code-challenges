export const toLastNames = people => {
  return people.map(n => `${n.firstName} ${n.lastName}`);
};

export const addValues = (arr) => {
  return arr.reduce((sum, n) => sum += n, 0);
};

export const addPurchases = (arr) => {
  return arr.reduce((accumulator, value) => {
    return accumulator += value.purchasePrice;
  }, 0);
};

export const countNumberOfElements = (arr) => {
  return arr.reduce((accumulator) => {
    return accumulator + 1;
  }, 0);
};

export const returnNames = (arr) => {
  return arr.reduce((accumulator, value) => {
    accumulator.push(value.name);
    return accumulator;
  }, []);
};


export const reversedString = (str) => {
  return str.split('').reduce((accumulator, value) => value + accumulator, '');
};