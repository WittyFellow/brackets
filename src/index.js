module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      let bracketsStr = bracketsConfig[j].join("");
      while (str.includes(bracketsStr)) {
        str = str.replace(bracketsStr, "");
      }
    }
  }
  return str.length === 0 ? true : false;
}
