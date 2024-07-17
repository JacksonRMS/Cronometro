const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let timerInterval;
let seconds = 0;

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);


function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    seconds = 0;
    updateTimer();
}

function updateTimer() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;
    timerDisplay.textContent = formattedTime;
    seconds++;
}




























// let number = 0
// let stopwatch
// const title = document.querySelector("h1")

// function start() {
//     stopwatch = setInterval(function () {
//         number++
//         title.innerHTML = number
//     }, 0)
// }

// function stops() {
//     clearInterval(stopwatch)
// }

// function restart() {
//     number-start.value
//     title.innerHTML = 0
// }





// // let number = 0

// // setInterval(() => {
// //     console.log(number++)
// // }, 1000);