// create tower builder
function towerBuilder(n) {
	// Write your code here
	let result = "";
	let star = "";
	let space = "";

	for (let i = 1; i <= n; i++) {
		space = " ".repeat(n - i);
		star = "*".repeat(2 * i - 1);
		result += space + star + space + "\n";
	}

	return result;
}

console.log(towerBuilder(3));
