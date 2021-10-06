const newJoke = document.getElementById('joke');
const next = document.getElementById('next');

next.addEventListener('click',nayajokede);

nayajokede();

 async function nayajokede(){
    const jokes = await fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept':'application/json'
        }
    });
    const chutkila = await jokes.json();
console.log(chutkila);
newJoke.innerHTML = chutkila.joke;
}
