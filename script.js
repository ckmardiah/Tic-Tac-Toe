function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (userChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    result = `You win! ${userChoice} beats ${computerChoice}`;
  } else {
    result = `You lose! ${computerChoice} beats ${userChoice}`;
  }

  document.getElementById("result").textContent = result;
}
