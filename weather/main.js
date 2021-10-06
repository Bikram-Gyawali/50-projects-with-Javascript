const api={
    baseurl:"https://openweathermap.org/data/2.5/",
    key:"487e87f99347f98f16cab398c49c2331"
}
const searchbox= document.querySelector(".search-box");
searchbox.addEventListener('keypress',getQuery);

function getQuery(e){
    if(e.keyCode==13){
        getResults(searchbox.value);

    }
    function getResults(query){
        fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`).then(weather=>{
            return weather.json();
        }).then(displayResult);
    }
}

function displayResult(weather){
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`
}