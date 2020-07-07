// get modal element

var modal= document.getElementById('simple-modal');

// open the modal on tapping click here btn
var modalBtn=document.getElementById('modal-btn');

// close the modal
 var close = document.querySelector('.close');

// listen for click

modalBtn.addEventListener('click',openModal);
close.addEventListener('click',closeModal);

function openModal(){
    modal.style.display="block";
}
function closeModal(){
    modal.style.display="none";
    document.getElementById('more').innerHTML=`<h1>Close Bhayo hai taw dont mind dherai edit garena maile</h1>`
}