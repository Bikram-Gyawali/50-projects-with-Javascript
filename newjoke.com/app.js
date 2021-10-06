var newJoke = document.getElementById('joke');
var next = document.getElementById('next');

var quotes;
var pivot = 1;
nayajokede();
// https://icanhazdadjoke.com/
 async function nayajokede(){
    // const jokes = await fetch('https://type.fit/api/quotes',{
    //     headers:{
    //         'Accept':'application/json'
    //     }
    // });
    const quote = await  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
          return data;
  });

    const chutkila = await quote;
    quotes = quote;
    setQuote(pivot);
    // console.log("chutkila",chutkila);
    // let alldata = "";
    // chutkila.forEach(element => {
        // alldata = alldata+"</br><span>"+element.text+"</span>";
    // });
    
    // newJoke.innerHTML = chutkila[0].author;
}
next.addEventListener('click',setQuote);
function setQuote(value){
    if(typeof value != "number"){
        value = pivot
    }
    newJoke.innerHTML = 
    
    "<h4>"+quotes[value].author+"</h4>"+
    "<p>"+quotes[value].text+"</p>";
    pivot++;
}
