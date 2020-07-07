// initial ratings
const ratings = {
    samsung:4.5,
    iphone:4,
    lenovo:2,
    oneplus:4.2,    
}

// total stars

const starTotal=5;

document.addEventListener('DOMContentLoaded',getRatings);

function  getRatings(){
    for(let rating in ratings){
        // get the percentage
        console.log(rating);
        const starPercentage = (ratings[rating]/starTotal)*100;
        // console.log(starPercentage);

        // percentage roundup
        const percentageRounded = `${Math.round(starPercentage/10)*10}%`;
        // console.log(percentageRounded);

        // setwidth of starsinner to percentage
        // document.querySelector(`.${rating}.stars-inner`).style.width=percentageRounded;
    }
}