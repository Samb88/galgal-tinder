// Mock for punycode module - not needed in React Native
module.exports = {
  encode: (str) => str,
  decode: (str) => str,
  toASCII: (str) => str,
  toUnicode: (str) => str,
  ucs2: {
    encode: (arr) => String.fromCharCode.apply(null, arr),
    decode: (str) => str.split('').map(c => c.charCodeAt(0)),
  },
};

