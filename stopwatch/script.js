let timerdisplay = document.querySelector('.timerdisplay');
let startbtn = document.getElementById('start-btn');
let stopbtn = document.getElementById('stop-btn');
let resetbtn = document.getElementById('reset-btn');

let msec = 0;
let secs = 0;                     
let mins = 0;

let timerid = null;
 
startbtn.addEventListener('click', function () {
    if (timerid !== null) {
        clearInterval(timerid);
    }
    timerid = setInterval(startTimer, 10);
});

stopbtn.addEventListener('click', function () {
    clearInterval(timerid);
});

resetbtn.addEventListener('click', function () {
    clearInterval(timerid);
    timerdisplay.innerHTML = "00 : 00 : 00"
    msec = secs = mins = 0;
});

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }


let msecString = msec < 10 ? "0"+ msec : msec;
let secsString = secs < 10 ? "0"+ secs : secs;
let minsString = mins < 10 ? "0"+ mins : mins;

timerdisplay.innerHTML = minsString +" : " + secsString + " : "+ msecString;
}