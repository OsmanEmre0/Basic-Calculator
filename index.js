// Select all buttons
const buttonsEl = document.querySelectorAll("button");

// Select the input field
const inputFieldEl = document.getElementById("result");

// Add click event listeners to all buttons
buttonsEl.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
});

function clearResult() {
  inputFieldEl.value = "";
}

function calculateResult() {
  try {
    inputFieldEl.value = eval(inputFieldEl.value);
  } catch (error) {
    inputFieldEl.value = "Error";
  }
}

function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
}
