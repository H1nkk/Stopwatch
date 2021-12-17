var seconds = 00;
var tens = 00;
var appendSeconds = document.getElementById("seconds");
var appendTens = document.getElementById("tens");
var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var Interval;

buttonStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

function button_startOnClick() {
    buttonStart.setAttribute("class","clicked")

}
buttonStop.onclick = function() {
    clearInterval(Interval);
}

buttonReset.onclick = function() {
    clearInterval(Interval);
    seconds = "00";
    tens = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
}

function startTimer() {
    tens++;
    if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
    } else {
        appendTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        console.log("seconds");
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
}
