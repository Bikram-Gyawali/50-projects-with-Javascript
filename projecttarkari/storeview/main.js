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



// this one for map start
var locations = [
    ['bhaktapur',27.672968,85.429291,'http://tarkariapp.herokuapp.com/'],
    ['lalitpur',24.687860,78.412018,'http://tarkariapp.herokuapp.com/'] ,
    ['Dolaght',27.6329,85.7025,'http://tarkariapp.herokuapp.com/']
];

var map = new google.maps.Map(document.getElementById('map'), {
zoom: 10,
center: new google.maps.LatLng(27.6329,85.7025),
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
marker = new google.maps.Marker({
position: new google.maps.LatLng(locations[i][1], locations[i][2]),
map: map,
url: locations[i][4]
});

google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
return function() {
infowindow.setContent(locations[i][0]);
infowindow.open(map, marker);
}
})(marker, i));

google.maps.event.addListener(marker, 'click', (function(marker, i) {
return function() {
infowindow.setContent(locations[i][0]);
infowindow.open(map, marker);
window.location.href = this.url;
}
})(marker, i));
}
// map working finished

// LIST SEARCHING FUNCTION

// dom selevtion:---


// search.addEventListener('onkeyup',searchFromList);

function searchFromList(){

    const show = document.getElementsByTagName('input');
const search = document.getElementById('myInput');
const filter = search.value.toUpperCase();
const ul = document.getElementById('myUL');
const li = ul.getElementsByTagName('li');


    for(let i=0;i<li.length;i++){
        var a = li[i].getElementsByTagName('a')[0];
        var textValue = a.textContent || a.innerText;
        if(textValue.toUpperCase().indexOf(filter)>-1){
            li[i].style.display='';
        }else{
            li[i].style.display="none";
        }
    }
   ul.style.visibility='visible';
  window.addEventListener('click',function(e){
      if(this.document.querySelector('.search-box').contains(e.target)){
        ul.style.visibility='visible';

      }else{
        ul.style.visibility='hidden';

      }
  })


}



