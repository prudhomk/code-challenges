export const replaceZeroes = (string) => {
  const regex = /0+\w/;
  return string.replace(regex, 'zero');
};

export const validatePin = (pin) => {

};

export const validateWord = (word) => {

};

export const hasNumber = (string) => {
  const regex = /\d/;
  if (regex.test(string)) return true;
  return false;
};


export const validateEmail = (email) => {

};

export const validatePhoneNumber = (phoneNumber) => {
  const regex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  if (regex.test(phoneNumber)) return true;
  return false;
};