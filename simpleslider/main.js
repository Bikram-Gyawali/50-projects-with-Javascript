const slides = document.querySelectorAll('.slide');
const next= document.querySelector('#next');
const prev= document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide=() =>{

    // get current class
    const current =document.querySelector('.current');

    // remove current clss
    current.classList.remove('current');

    // check for next slide
    if(current.nextElementSibling){
        // add current to next sibling
        current.nextElementSibling.classList.add('current')

    }else{
        // add current to start
        slides[0].classList.add('current');
    }
    setTimeout(()=> current.classList.remove('current'));
}

// previous slide
 
const prevSlide=() =>{

    // get current class
    const current =document.querySelector('.current');

    // remove current clss
    current.classList.remove('current');

    // check for preev slide
    if(current.previousElementSibling){
        // add current to prev sibling
        current.previousElementSibling.classList.add('current')

    }else{
        // add current to start
        slides[slides.length-1].classList.add('current');
    }
    setTimeout(()=> current.classList.remove('current'));
}
next.addEventListener('click',e=>{
    nextSlide();
});
prev.addEventListener('click',e=>{
    prevSlide();
})