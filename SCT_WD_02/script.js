let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
let display = document.getElementById("display");
let laps = document.getElementById("laps");
let interval = null;

function updateDisplay() {
  let h = hours.toString().padStart(2, '0');
  let m = minutes.toString().padStart(2, '0');
  let s = seconds.toString().padStart(2, '0');
  let ms = milliseconds.toString().padStart(3, '0');
  display.innerText = `${h}:${m}:${s}:${ms}`;
}

function stopwatch() {
  milliseconds += 10;
  if (milliseconds >= 1000) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function startStopwatch() {
  if (interval !== null) return;
  interval = setInterval(stopwatch, 10);
}

function stopStopwatch() {
  clearInterval(interval);
  interval = null;
}

function resetStopwatch() {
  stopStopwatch();
  [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
  updateDisplay();
  laps.innerHTML = '';
}

function lapStopwatch() {
  let h = hours.toString().padStart(2, '0');
  let m = minutes.toString().padStart(2, '0');
  let s = seconds.toString().padStart(2, '0');
  let ms = milliseconds.toString().padStart(3, '0');
  let lapTime = `${h}:${m}:${s}:${ms}`;
  const lapItem = document.createElement("div");
  lapItem.textContent = `Lap ${laps.children.length + 1}: ${lapTime}`;
  laps.prepend(lapItem);
}
