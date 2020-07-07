// // DOM elements
// const resultEL = document.getElementById('result');
// const lengthEL = document.getElementById('length');
// const uppercaseEL =document.getElementById('uppercase');
// const lowercaseEL = document.getElementById('lowercase');
// const numberEL= document.getElementById('numbers');
// const symbolsEL= document.getElementById('symbols');
// const generateEL= document.getElementById('generate');
// const clipboardEL= document.getElementById('clipboard');



// const randomFunc ={
//     lower:getRandomLower,
//     upper:getRandomUpper,
//     number:getRandomNumber,
//     symbol:getRandomSymbol,
// };

// clipboardEL.addEventListener('click', () => {
// 	const textarea = document.createElement('textarea');
// 	const password = resultEl.innerText;
	
// 	if(!password) { return; }
	
// 	textarea.value = password;
// 	document.body.appendChild(textarea);
// 	textarea.select();
// 	document.execCommand('copy');
// 	textarea.remove();
// 	alert('Password copied to clipboard');
// });

// // Generate event listner

// generateEL.addEventListener('click',()=>{
// const length = +lengthEL.value; 
// const hasLower = lowercaseEL.checked;
// const hasUpper = uppercaseEL.checked;
// const hasNumber = numberEL.checked;
// const hasSymbol = symbolsEL.checked;

// resultEL.innerText= generatePassword(hasLower,hasNumber,hasSymbol,hasUpper,length);
// })
// // genrate pw function
// function generatePassword(lower,number,symbol,upper,length){
// // 1 init pw variable
// // 2. filter out checked or not
// // 3. loop ovr the length call generstor fncn
// // 4. add final pw to the var and return

// let generatedPassword = '';
// const typesCount = lower + upper + number + symbol;
// // console.log('typesCount:',typesCount);
// const typesArr = [{lower},{upper},{number},{symbol}].filter(item =>Object.values(item)[0]);
// // console.log('typesArr:',typesArr);
// if(typesCount === 0){
//     return '';
// } 
// for (let i=0;i<length;i += typesCount){
//     typesArr.forEach(type=>{
//     const funcName = Object.keys(type)[0];

//     generatedPassword +=randomFunc[funcName]();
//     });
// }
// const finalPassword = generatedPassword.slice(0,length);
// return finalPassword;
// }


// // generator functions
// // http://www.net-comber.com/charset.html watch it bro

// // forlowercase
// function getRandomLower(){
//     return String.fromCharCode(Math.floor(Math.random()*26)+97);
// }
// // console.log(getRandomLower());

// // uppercase random

// function getRandomUpper(){
//     return String.fromCharCode(Math.floor(Math.random()*26)+65);
// }
// // console.log(getRandomUpper());

// // for numbers rndom
// function getRandomNumber(){
//     return String.fromCharCode(Math.floor(Math.random()*10)+48);
// }
// // console.log(getRandomNumber());

// // for random symbols
// function getRandomSymbol(){

//     const symbols = '<>.;:{}[]\|+=-)(*&^%$#@!`~,"_';
//     return symbols [Math.floor(Math.random()*symbols.length)];

// }
// // console.log(getRandomSymbol());

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

clipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;
	
	if(!password) { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});

generate.addEventListener('click', () => {
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;
	
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}
	
	// create a loop
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

















// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});