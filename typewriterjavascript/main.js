const TypeWriter = function(txtElement,words,wait=3000){
this.txtElement =txtElement;
this.words=words;
this.txt='';
this.wordIndex=0;
this.wait=parseInt(wait,10);
this.type();
this.isDeleting = false;
}


// Type Method
TypeWriter.prototype.type=function(){
    // Current index of word
    const current =this.wordIndex % this.words.length;

    // get full text of current word
    const fullTxt =this.words[current];

    // Check if deleting
    if(this.isDeleting){
        // remove char
        this.txt =fullTxt.substring(0,this.txt.length-1);
    }else{
        // add char
        this.txt = fullTxt.substring(0,this.txt.length+1);
    }
    // add char
    this.txtElement.innerHTML=`<span class="txt">${this.txt}</span>`;



    // Initial Type Speed
    let typeSpeed = 300;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 1000;
    }

    setTimeout(()=>this.type(),typeSpeed);
}

// Init on DOMload

document.addEventListener('DOMContentLoaded',init);

// Init application

function init(){
    const txtElement =document.querySelector('.text-type');
    const words =JSON.parse(txtElement.getAttribute('data-words'));
    const wait=txtElement.getAttribute('data-wait');

    // Init Typewritter...
    new TypeWriter(txtElement,words,wait);
}