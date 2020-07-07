
window.addEventListener('load',init);
// global variables

// Available levels
const levels ={
easy:6,
medium:4,
hard:3,
}
// change level
const currentLevel = levels.medium; 

let time = 5;
let score =0;
let isPlaying;

// DOM Element

const wordInput=document.querySelector('#word-input');
const currentWord =document.querySelector('#current-word');
const scoreDisplay=document.querySelector('#score');
const timeDisplay=document.querySelector('#time');
const message=document.querySelector('#message');
const seconds=document.querySelector('#seconds');

const words=[
,    'a',
,'ability'
,'able'
,'about'
,'above'
,'accept'
,'according'
,'account'
,'across'
,'act'
,'action'              
,'activity'
,'actually'
,'add'
,'address'
,'administ','ration'
,'admit'
,'adult'
,'affect'
,'after'
,'again'
,'against'
,'age'
,'agency'
,'agent'
,'ago'
,'agree'
,'agreement'
,'ahead' 
,'air'
,'all'
,'allow'
,'almost'
,'alone'
,'along       '      
,'already'
,'also'
,'although'
,'always'
,'American'
,'among'
,'amount'
,'analysis'
,'and'
,'animal'
,'another'
,'answer'
,'any'
,'anyone'
,'anything'
,'appear'
,'apply'
,'approach'
,'area'
,'argue'
,'arm'
,'around'
,'arrive'
,'art'
,'article'
,'artist'
,'as'
,'ask'
,'assume'
,'at'
,'attack'
,'attention'
,'attorney'
,'audience'
,'author'
,'authority'
,'available'
,'avoid'
,'away'
,'baby'
,'back'
,'bad'
,'bag'
,'ball'
,'bank'
,'bar'
,'base'
,'be'
,'beat'
,'beautiful'
,'because'
,'become'
,'bed'
,'before'
,'begin'
,'behavior'
,'behind'
,'believe'
,'benefit'
,'best'
,'better'
,'between'
,'beyond'
,'big'
,'bill'
,'billion'
,'bit'
,'black'
,'blood'
,'blue'
,'board'
,'body'
,'book'
,'born'
,'both'
,'box'
,'boy'
,'bring'
,'brother'
,'budget'
,'build'
,'building'
,'business'
,'but'
,'buy'
,'by'
,'call'
,'camera'
,'campaign'
,'can'
,'cancer'
,'candidate'
,'capital'
,'car'
,'card'
,'care'
,'career'
,'carry'
,'cell'
,'center'
,'central'
,'century'
,'certain'
,'certainly'
,'chair'
,'challenge'
,'chance'
,'change'
,'character'
,'charge'
,'check'
,'child'
,'choice'
,'choose'
,'church'
,'citizen'
,'city'
,'civil'
,'claim'
,'clearly'
,'close'
,'coach'
,'cold'
,'collection'
,'college'
,'color'
,'come'
,'commercial'
,'common'
,'community'
,'company'
,'compare'
,'computer'
,'concern'
,'condition'
,'conference'
,'Congress'
,'consider'
,'consumer'
,'contain'
,'control'
,'cost'
,'could'
,'country'
,'couple'
]

// initilize game 

function init(){
    // console.log(init);

    // load word from aray

    showWord(words);

    // Start matchig on entered words
    wordInput.addEventListener('input',startMatch);


    // call count down persec
    setInterval(countdown,1000);
    // check status
    setInterval(checkStatus,50);
}

// start match
function startMatch(){
    if(matchWords()){
    // console.log('Match!!');
    isPlaying=true;
    time = currentLevel+1;
    showWord(words);
    wordInput.value='';
    score++;
    }
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    }else{
    scoreDisplay.innerHTML=score;
    }
}

//  matchwords fncn
function matchWords(){  
        if(wordInput.value===currentWord.innerHTML){
            message.innerHTML = 'Correct!!!';
            return true;
        
        }else{
            message.innerHTML = '';
            return false;
        }
            
}

// pick and show random word
function showWord(words){
    // generate rann index from array
    const ranIndex = Math.floor(Math.random()*words.length);
    // output rand word
    currentWord.innerHTML=words[ranIndex];

}
// timer countdown
function countdown(){
    if(time>0){
        // dec time
        time--;
    }else if(time === 0){
        isPlaying = false;
    }
    // show time
    timeDisplay.innerHTML=time; 

}
// check game status
function checkStatus(){
    if(isPlaying && time === 0){
        message.innerHTML = 'Game Over!!!';
        score =-1;
    }
}