module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;

  for (let b = 0; b < str.length; b++) {
    bracketsConfig.forEach((brack) => {
      brack = brack.join("");
      if (str.includes(brack)) {
        str = str.replace(brack, "");
        b = 0;
      }
    });
  }

  return str.length === 0;
};
