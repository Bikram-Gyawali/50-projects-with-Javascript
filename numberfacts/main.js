let fact = document.getElementById('fact');
let factTexts=document.getElementById('factText');
let numberInput=document.getElementById('numberInput');


//this will run the functon on line no 16 but it is commeneted out
// used ajax here
// numberInput.addEventListener('input',getFactAjax);

// this will run the function on line 35 used fetch
numberInput.addEventListener('input',getFactFetch);





// fetch with ajax
function getFactAjax(){
    let number = numberInput.value;
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://numbersapi.com/'+number);



    xhr.onload = function(){
        if(this.status == 200 && number != ''){
            fact.style.display='block';
            factTexts.innerText=this.responseText;
        }
    }
    xhr.send();
}

  // Fetch with Fetch API
  function getFactFetch(){
    let number = numberInput.value;
    
    if(number != ''){
      fetch('http://numbersapi.com/'+number)
      .then(response => response.text())
      .then(data => {
        fact.style.display = 'block';
        factText.innerText = data;
      })
      .catch(err => console.log(err)); 
    }
}