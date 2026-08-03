const timerDisplay = document.getElementById("timerDisplay");
const startTimerButton = document.getElementById("startTimerButton");
const pauseTimerButton = document.getElementById("pauseTimerButton");
const resetTimerButton = document.getElementById("resetTimerButton");

let timeLeft = 25 * 60;
let timerInterval = null;

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerDisplay.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

startTimerButton.addEventListener("click", function () {
    if (timerInterval !== null) {
        return;
    }

    timerInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            timerInterval = null;
            alert("Focus session complete. Take a short break.");
        }
    }, 1000);
});

pauseTimerButton.addEventListener("click", function () {
    clearInterval(timerInterval);
    timerInterval = null;
});

resetTimerButton.addEventListener("click", function () {
    clearInterval(timerInterval);
    timerInterval = null;
    timeLeft = 25 * 60;
    updateTimerDisplay();
});

updateTimerDisplay();