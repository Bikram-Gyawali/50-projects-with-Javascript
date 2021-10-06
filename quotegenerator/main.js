var newquote = document.getElementById('quote');
var next = document.getElementById('next');

var quotes;
var pivot = Math.floor(Math.random()*1643);
newquotes();
 async function newquotes(){
 
    const quote = await  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
          return data;
  });
  

    const motive = await quote;
    quotes = quote;
    console.log(quotes.length);

    setQuote(pivot);
   
}
next.addEventListener('click',setQuote);

function setQuote(value){
    if(typeof value != "number"){
        value = pivot
    }
    newquote.innerHTML = 
    
    "<h4>"+quotes[value].author+"</h4>"+
    "<p>"+quotes[value].text+"</p>";
    pivot++;
}
