function insertDash(num) {
  var dashNum = String(num);
  return dashNum.replace(/[13579](?=[13579])/g, "$&-");
}