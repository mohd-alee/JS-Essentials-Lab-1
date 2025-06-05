function convertIntoInt(val1, val2) {
	let num1 = parseInt(val1);
	let num2 = parseInt(val2);
	return [num1, num2];
}

function performAddition() {
	let integers = convertIntoInt(
		document.getElementById("input1").value,
		document.getElementById("input2").value
	);
	performOperation(integers[0], integers[1], "addition");
}
function performSubstraction() {
	let integers = convertIntoInt(
		document.getElementById("input1").value,
		document.getElementById("input2").value
	);
	performOperation(integers[0], integers[1], "substraction");
}
function performDivision() {
	let integers = convertIntoInt(
		document.getElementById("input1").value,
		document.getElementById("input2").value
	);
	performOperation(integers[0], integers[1], "division");
}
function performMultiplication() {
	let integers = convertIntoInt(
		document.getElementById("input1").value,
		document.getElementById("input2").value
	);

	performOperation(integers[0], integers[1], "multiplication");
}

function performOperation(value1, value2, arth_operation) {
	let num1 = value1;
	let num2 = value2;
	let operation = arth_operation;
	let result;
	// Check if inputs are valid numbers
	if (!isNaN(num1) && !isNaN(num2)) {
		if (operation == "addition") {
			result = num1 + num2;
		} else if (operation == "substraction") {
			result = num1 - num2;
		} else if (operation == "division") {
			result = num1 / num2;
		} else if (operation == "multiplication") {
			result = num1 * num2;
		}
		// Display the result
		displayResult(result);
	} else {
		displayResult("Please enter valid numbers");
	}
}

function displayResult(result) {
	// Display the result in the paragraph element
	const resultElement = document.getElementById("result");
	resultElement.textContent = `The result is: ${result}`;
}
