let timerInterval;
let timeLeft;
let startTime;

function startTimer(duration) {
  clearInterval(timerInterval);

  startTime = Date.now();
  timeLeft = duration;

  timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 0;
  updateTimer();
}

function updateTimer() {
  const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
  const minutes = Math.floor((timeLeft - elapsedTime) / 60);
  const seconds = (timeLeft - elapsedTime) % 60;

  if (timeLeft - elapsedTime >= 0) {
    document.getElementById("timer").textContent = formatTime(minutes) + ":" + formatTime(seconds);
  } else {
    document.getElementById("timer").textContent = "00:00";
    clearInterval(timerInterval);
  }
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

// Event listeners for buttons
document.getElementById("startBtn").addEventListener("click", function () {
  const duration = parseInt(prompt("Enter countdown duration (in seconds):"));
  if (!isNaN(duration) && duration > 0) {
    startTimer(duration);
  }
});

document.getElementById("stopBtn").addEventListener("click", stopTimer);

document.getElementById("resetBtn").addEventListener("click", resetTimer);
