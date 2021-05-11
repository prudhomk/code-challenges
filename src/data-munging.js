export function returnTen(str) {
  return str.split('').slice(-10);
}

export function findMax(matrix) {
  const value = matrix.map(n => (Math.max.apply(null, n)));
  return Math.max.apply(null, value);
}

export function totalSum(matrix) {
  const value = matrix.map(n => n.reduce((sum, n) => sum += n, 0));
  return value.reduce((solution, value) => solution += value, 0);
}

export function grandTotal(stores) {
  let arr = [];
  for (let i = 0; i < stores[0].length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < stores.length; j++) {
      hourlyTotal += stores[j][i];
      
    }
    arr.push(hourlyTotal);
  }
  console.log(arr);
  return arr;
}

export function salesData(hours, data) {
  const result = [];
  data.forEach((item, index) => {
    result.push({ sales:`${item} cookies`, time: hours[index] });
  });
  return result;
}