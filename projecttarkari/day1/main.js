
// for selection for small screen....
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {


  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  
});


// this one for graph
let canvas=document.querySelector('#bar-graph');
let myCharts = document.getElementById('bar-graph').getContext('2d');

let bargraph = new Chart(myCharts,{
type : 'bar',//there are others like pie line horizontalbar radar polararea doughnut can be used
data:{
    labels:['Aalu','tamatar','Pyaj','lasun','dhaniya','masu','tel','aanda','aadhuwa','khursani'],
    datasets:[{
        label:'Price Rs',
        data:[50,90,70,120,10,400,90,300,200,100],
        backgroundColor:['rgb(163, 71, 0)','rgb(163, 162, 0)','rgb(163, 162, 233)','rgb(163, 75, 93)','rgb(200, 123, 93)','rgb(23, 123, 93)','rgb(23, 80, 137)','rgb(16, 151, 137)','rgb(59, 108, 201)','rgb(59, 239, 201)'],
        borderWidth:1,
        borderColor:'#888',
        hoverBorderWidth:2,
        hoverBorderColor:'#000',
    }],
   
},

options:{
    title:{
        display:true,
        text:'Bazar ma tarkri ko vau her ani ja',
        fontSize:20,
    },
  
}
});

canvas.style.height='500px';
canvas.style.width='80rem';

// slide show part
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
} 