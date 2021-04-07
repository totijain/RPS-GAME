let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function compChoiceFun() {
  const arr = ["r", "s", "p"];

  return arr[Math.floor(Math.random() * 3)];
}
function convert(letter) {
  if (letter === "r") return "Rock";
  else if (letter === "p") return "Paper";
  else return "Scissor";
}
function win(userChoice, compChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const user = "user".fontsize(5).sub();
  const comp = "comp".fontsize(5).sub();
  result_p.innerHTML =
    convert(userChoice) +
    user +
    " beats " +
    convert(compChoice) +
    comp +
    ". YOU WIN ";
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(
    () => document.getElementById(userChoice).classList.remove("green-glow"),
    300
  );
}
function lose(userChoice, compChoice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const user = "user".fontsize(5).sub();
  const comp = "comp".fontsize(5).sub();

  result_p.innerHTML =
    convert(userChoice) +
    user +
    " loses to " +
    convert(compChoice) +
    comp +
    ". YOU LOSE ";
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(
    () => document.getElementById(userChoice).classList.remove("red-glow"),
    300
  );
}
function draw(userChoice, compChoice) {
  const user = "user".fontsize(5).sub();
  const comp = "comp".fontsize(5).sub();

  result_p.innerHTML =
    convert(userChoice) +
    user +
    " equals " +
    convert(compChoice) +
    comp +
    ". ITS A DRAW ";
  document.getElementById(userChoice).classList.add("grey-glow");
  setTimeout(
    () => document.getElementById(userChoice).classList.remove("grey-glow"),
    300
  );
}

function game(userChoice) {
  const compChoice = compChoiceFun();
  console.log(userChoice + compChoice);

  switch (userChoice + compChoice) {
    case "rs":
    case "sp":
    case "pr":
      win(userChoice, compChoice);
      break;
    case "sr":
    case "ps":
    case "rp":
      lose(userChoice, compChoice);
      break;
    default:
      draw(userChoice, compChoice);
  }
}

function main() {
  rock_div.addEventListener("click", function() {
    game("r");
  });
  paper_div.addEventListener("click", function() {
    game("p");
  });
  scissor_div.addEventListener("click", function() {
    game("s");
  });
}
main();
