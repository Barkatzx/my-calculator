let currentDisplay = '0'; // current display value

// function to update the display
function updateDisplay(value) {
  const display = document.getElementById('display');
  if (currentDisplay === '0') {
    currentDisplay = value;
  } else {
    currentDisplay += value;
  }
  display.textContent = currentDisplay;
}

// function to clear the display
function allClear() {
  currentDisplay = '0';
  const display = document.getElementById('display');
  display.textContent = currentDisplay;
}

// function to clear last character in display
function oneClear() {
  currentDisplay = currentDisplay.slice(0, -1);
  const display = document.getElementById('display');
  if (currentDisplay === '') {
    currentDisplay = '0';
  }
  display.textContent = currentDisplay;
}

// function to evaluate the expression and display the result
function calc() {
  const display = document.getElementById('display');
  try {
    currentDisplay = eval(currentDisplay);
  } catch (error) {
    currentDisplay = 'Error';
  }
  display.textContent = currentDisplay;
}

// function to show the button value on the display
function show(value) {
  updateDisplay(value);
}
document.getElementById('toggler').addEventListener('click', function(){
    document.body.style.backgroundColor = 'black';
})
