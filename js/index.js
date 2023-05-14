const inputField = document.getElementById("inputField");
let currentVal = "0"; // Der aktuelle Wert der Eingabe
let prevVal = "0"; // Der vorherige Wert der Eingabe
let operation = null; // Die aktuelle auszuführende Operation

function clear() {
  currentVal = "0";
  prevVal = "0";
  operation = null;
  updateDisplay();
}

function deleteChar() {
  currentVal = currentVal.slice(0, -1);
  if (currentVal === "") {
    currentVal = "0";
  }
  updateDisplay();
}

function updateDisplay() {
  inputField.value = currentVal;
}

function inputNumber(num) {
  if (currentVal === "0") {
    currentVal = num;
  } else {
    currentVal += num;
  }
  updateDisplay();
}

function performOperation(op) {
  if (operation !== null) {
    prevVal = calculate();
  } else {
    prevVal = currentVal;
  }
  currentVal = "0";
  operation = op;
  updateDisplay();
}

function calculate() {
  const num1 = parseFloat(prevVal);
  const num2 = parseFloat(currentVal);
  let result = 0;
  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "*") {
    result = num1 * num2;
  } else if (operation === "/") {
    result = num1 / num2;
  }
  return result.toString();
}

document.getElementById("clear").addEventListener("click", clear);
document.getElementById("delete").addEventListener("click", deleteChar);

const numbers = document.getElementsByClassName("button");
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    inputNumber(numbers[i].getAttribute("data-number"));
  });
}

const operations = document.getElementsByClassName("operation");
for (let i = 0; i < operations.length; i++) {
  operations[i].addEventListener("click", function () {
    performOperation(operations[i].getAttribute("data-operation"));
  });
}

document.getElementById("calculate").addEventListener("click", function () {
  currentVal = calculate();
  prevVal = "0";
  operation = null;
  updateDisplay();
});
