let hr = document.getElementById('hour')
let min = document.getElementById('minute')
let sec = document.getElementById('second')

function displayTime(){
   let date= new Date();
   
   //getting hours, minute, seconds form date
   let hh = date.getHours();
   let mm = date.getMinutes();
   let ss = date.getSeconds();

   //calculation of rotation of the hands

   let hRotation = 30*hh +mm/2;
   let mRotation = 6*mm;
   let sRotation = 6*ss;

   hr.style.transform = `rotate(${hRotation}deg)`;
   min.style.transform = `rotate(${mRotation}deg)`;
   sec.style.transform = `rotate(${sRotation}deg)`;

}

setInterval(displayTime, 1000)
