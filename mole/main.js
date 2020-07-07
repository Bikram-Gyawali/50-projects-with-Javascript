
//   const holes = document.querySelectorAll('.hole');
//   const scoreBoard = document.querySelector('.score');
//   const moles = document.querySelectorAll('.mole');
//   let lastHole;
//   let timeUp=false;

//   function randTime(min,max){
//       return Math.round(Math.random()*(max-min)+min);
      

//   }
// function randomHole(holes){
//     const idx = Math.floor(Math.random()*holes.length);
//     const hole = holes[idx];
//     if(hole ===lastHole){
//         return randomHole(holes);
//     } 
//     lastHole=hole;
//     return hole;
// }

// function popingmole(){
//     const time = randTime(200,1000);
//     const hole = randomHole(holes);
//     hole.classList.add('up');
//     setTimeout(()=>{
//         hole.classList.remove('up');
//         if(!timeUp)  popingmole();
          
//     },time) ;
// }
// function startGame(){
//     scoreBoard.textContent=0;
//     timeUp = false;
//     popingmole();
//     setTimeout(()=>timeUp=true,10000);
// }

const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => timeUp = true, 1000000)
}

function bonk(e) {
  if(!e.isTrusted) return;
  score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));