const daysE = document.getElementById("days");
const  hoursE= document.getElementById("hours");
const minutesE = document.getElementById("minutes");
const secondsE = document.getElementById("seconds");


const Deepawali = "01 Jan 2023";
function countdown() {
const DeepawaliDate = new Date(Deepawali);
const currDate = new Date();

const  totalSeconds = ( DeepawaliDate - currDate)/1000

const days = Math.floor(totalSeconds/3600/24);
const hours = Math.floor(totalSeconds/3600) % 24;
const minutes = Math.floor(totalSeconds/60) % 60;
const seconds = Math.floor(totalSeconds)%60;


 daysE.innerHTML = days;
 hoursE.innerHTML = hours;
 minutesE.innerHTML = minutes;
 secondsE.innerHTML = seconds;
}
countdown();
 
setInterval(countdown,1000);