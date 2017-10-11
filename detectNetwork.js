// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var prefix = cardNumber[0] + cardNumber[1];
  var longPrefix = cardNumber.slice(0, 4);
  var prettyLong = parseInt(cardNumber.slice(0, 3));
  var extraLong = parseInt(cardNumber.slice(0, 7));
  if ((prefix === '38' || prefix === '39') && cardNumber.length === 14) {
  	return 'Diner\'s Club';
  } 
  if ((prefix === '34' || prefix === '37') && cardNumber.length === 15) {
	return 'American Express';
  }
  if ((longPrefix === '4903' || longPrefix === '4905' || longPrefix === '4911' || longPrefix === '4936' || longPrefix === '6333' || longPrefix === '6759' || extraLong === 633110 || extraLong === 564182) && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
  	return 'Switch';
  } else if (cardNumber[0] === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
  	return 'Visa';
  }
  if (cardNumber.length === 16 && (prefix === '51' || prefix === '52' || prefix === '53' || prefix === '54' || prefix === '55')) {
  	return 'MasterCard';
  }
  if ((longPrefix === '6011' || prefix === '65' || (prettyLong <= 649 && prettyLong >= 644)) && (cardNumber.length === 16 || cardNumber.length === 19)) {
  	return 'Discover';
  }
  if ((longPrefix === '5018' || longPrefix === '5020' || longPrefix === '5038' || longPrefix === '6304') && (cardNumber.length <= 19 && cardNumber.length >= 12)) {
  	return 'Maestro';
  }
  if (((extraLong >= 622126 && extraLong <= 622925) || (prettyLong >= 624 && prettyLong <= 626) || (parseInt(longPrefix) >= 6282 && parseInt(longPrefix) <= 6288)) && (cardNumber.length >= 16 && cardNumber.length <= 19)) {
  	return 'China UnionPay';
  }
};


