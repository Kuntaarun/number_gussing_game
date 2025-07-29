let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  const attemptsDisplay = document.getElementById("attempts");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  attempts++;
  if (guess < secretNumber) {
    message.textContent = "Too low. Try again!";
  } else if (guess > secretNumber) {
    message.textContent = "Too high. Try again!";
  } else {
    message.textContent = `🎉 You guessed it in ${attempts} attempts!`;
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
}
