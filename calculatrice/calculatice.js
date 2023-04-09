let display = document.querySelector("input[name=display]");

function addToDisplay(value) {
	display.value += value;
}

function clearDisplay() {
	display.value = "";
}

function backspace() {
	display.value = display.value.slice(0, -1);
}

function calculate() {
	try {
		display.value = eval(display.value);
	} catch (error) {
		display.value = "Error";
	}
}

function multiply() {
	addToDisplay('*');
}

function divide() {
	addToDisplay('/');
}