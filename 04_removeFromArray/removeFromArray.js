const removeFromArray = function (array, ...numbers) {
  const filtered = array.filter(element=> !numbers.includes(element))  
  return filtered;
}

// Do not edit below this line
module.exports = removeFromArray;
