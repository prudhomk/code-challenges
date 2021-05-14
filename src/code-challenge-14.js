export const replaceZeroes = (string) => {
  const regex = /0+\w/;
  return string.replace(regex, 'zero');
};

export const validatePin = (pin) => {
  const regex = /^.{4}$/;
  if (regex.test(pin)) return true;
  return false;
};

export const validateWord = (word) => {
  const regex = /^.{5,10}$/;
  if (regex.test(word)) return true;
  return false;
};

export const hasNumber = (string) => {
  const regex = /\d/;
  if (regex.test(string)) return true;
  return false;
};


export const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (regex.test(email)) return true;
  return false;
};

export const validatePhoneNumber = (phoneNumber) => {
  const regex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  if (regex.test(phoneNumber)) return true;
  return false;
};