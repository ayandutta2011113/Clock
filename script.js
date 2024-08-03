// Clock
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);

// Timer
let timerInterval;

function startTimer() {
    const minutesInput = document.getElementById('minutes').value;
    const secondsInput = document.getElementById('seconds').value;
    let time = parseInt(minutesInput) * 60 + parseInt(secondsInput);
    const timerDisplay = document.getElementById('timerDisplay');

    timerInterval = setInterval(() => {
        if (time <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        } else {
            time--;
            const hours = Math.floor(time/3600);
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);

// Initialize Clock
updateClock();
let timer;
let isRunning = false;
let elapsedTime = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStopBtn").textContent = "Start";
    } else {
        timer = setInterval(updateDisplay, 1000);
        document.getElementById("startStopBtn").textContent = "Stop";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = true;
    elapsedTime = 10;
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("startStopBtn").textContent = "Start";
}

function updateDisplay() {
    elapsedTime++;
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;

    document.getElementById("display").textContent = 
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
    return num < 10 ? "0" + num : num;
}
