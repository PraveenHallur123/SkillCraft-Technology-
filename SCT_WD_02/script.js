let timer;
let startTime;
let elapsedTime = 0;
let running = false;
let lapCount = 0;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const lapsList = document.getElementById("laps");

function formatTime(ms) {
  let hours = Math.floor(ms / 3600000);
  let minutes = Math.floor((ms % 3600000) / 60000);
  let seconds = Math.floor((ms % 60000) / 1000);
  let milliseconds = ms % 1000;

  return (
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0") +
    ":" +
    String(milliseconds).padStart(3, "0")
  );
}

function updateDisplay() {
  display.textContent = formatTime(elapsedTime);
}

//start
function startTimer() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
    running = true;
  }
}

//stop
function stopTimer() {
  clearInterval(timer);
  running = false;
}

//reset
function resetTimer() {
  clearInterval(timer);
  elapsedTime = 0;
  updateDisplay();
  running = false;
  lapCount = 0;
  lapsList.innerHTML = "";
}

//lap
function recordLap() {
  if (running) {
    lapCount++;
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapCount}: ${formatTime(elapsedTime)}`;
    lapsList.appendChild(lapItem);
  }
}

//evenst
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", recordLap);

//function call
updateDisplay();