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

}

export function salesData(hours, data) {

}