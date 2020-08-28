// Array of moods. 6 total
const moods = ["Happy", "Angry", "Sad", "Silly", "Quiet", "Paranoid"];

function getRandomMood() {
  const randomNum = Math.floor(Math.random() * moods.length); // returns a random integer from 0 to 9
  const moodDisplay = document.getElementById("currentMood");
  moodDisplay.innerText = moods[randomNum];
}

const btn = document.getElementById("btn");

btn.addEventListener("click", getRandomMood);
getRandomMood();
