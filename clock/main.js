const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
// minHand.style.color=  "red";
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds/60)*360)+90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    // console.log(seconds);

    // for minutes
    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes/60)*360)+90;
    minHand.style.transform = `rotate(${minuteDegrees}deg)`;
    // console.log(minutes);

    // for hours

    const hours = now.getHours();
    const hourDegrees = ((hours/24)*360)-130;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    // console.log(hours);
}
setInterval(setDate,1000); // function will run each second..