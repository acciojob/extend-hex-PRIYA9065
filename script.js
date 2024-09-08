const extendHex = (shortHex) => {
  // write your code here
	let char = "#";
	Boolean flag = false;

	for(let i = 1; i < shortHex.length; i++){
		char = char + shortHex.charAt(i) + shortHex.charAt(i);
		if(shortHex.charAt(i) >= 'A' && sshortHex.charAt(i) <= 'Z'){
			flag = true;
		}
	}
	if(flag){
		return char.toUpperCase();
	}
	else{
		return char;
	}
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));