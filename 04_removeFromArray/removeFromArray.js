const removeFromArray = function (array, ...args) {
  const filtered = array.filter(item => !args.includes(item))  
  return filtered;
}

// Do not edit below this line
module.exports = removeFromArray;
