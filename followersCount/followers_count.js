let count = 0; // Initialize count to 0
function increaseCount() {
	count++; // Increment the count by 1
	displayCount(); // Display the count
	checkCountValue(); // Check count value and display messages
}
function displayCount() {
	document.getElementById("countDisplay").innerHTML = count; // Display the count in the HTML
}

function checkCountValue() {
	if (count === 5) {
		alert("Your Instagram post gained 5 followers! Congratulations!");
	} else if (count === 10) {
		alert("Your Instagram post gained 10 followers! Keep it up!");
	}
}
function resetCount() {
	document.getElementById("countDisplay").innerHTML = 0;
	alert("Your Instagram followers has been reset");
}
