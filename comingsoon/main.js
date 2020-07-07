const countdown = document.querySelector('.countdown');
const comingsoon = document.querySelector('.comingsoon');

// set launch date (ms)
const launchDate = new Date('Jan 1,2020 13:00:00').getTime();

// update every second
const interval = setInterval(()=>{
    // get today date and time
    const now = new Date().getTime();

    // Distance from now to launch date
    const distance = launchDate-now;

    // console.log(distance);

    const days = Math.floor(distance/(1000*60*60*24));
    const hours =  Math.floor(distance%(1000*60*60*24)/(1000*60*60));
    const mins =  Math.floor(distance%(1000*60*60)/(1000*60));
    const sec =  Math.floor(distance%(1000*60)/(1000));

    countdown.innerHTML=`
        <div>${days}<span> Days</span>
        ${hours}<span> Hours</span>
        ${mins}<span> Minutes</span>
        ${sec}<span> Seconds</span></div>
    `;

    // if launched date passed
    if(distance < 0){
        // stopcountdown
        clearInterval(interval);

        // Style and output text

        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Launched!';
        comingsoon.innerHTML='Welcome Everyone';
    }

},1000);