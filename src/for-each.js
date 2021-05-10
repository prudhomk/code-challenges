export function returnTen(str) {
  return str.split('').slice(-10);

}

export function findMax(matrix) {
  const value = matrix.map(n => (Math.max.apply(null, n)));
  return Math.max.apply(null, value);
}

export function totalSum(matrix) {

}

export function grandTotal(stores) {

}

export function salesData(hours, data) {

}