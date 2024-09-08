const extendHex = (shortHex) => {
  // write your code here
	let char = "#";
	
	for(let i = 1; i < shortHex.length; i++){
		char = char + shortHex.charAt(i) + shortHex.charAt(i);
	}
	return char;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));