  const msg = new SpeechSynthesisUtterance();
  let voices = [];
  const voicesDropdown = document.querySelector('[name="voice"]');
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');
  msg.text = document.querySelector('[name="text"]').value;

function populateVoices(){
  voices=this.getVoices();
  // console.log(voices)
  voicesDropdown.innerHTML = voices
  .map(voice=>`
    <option value="${voice.name}">${voice.name} (${voice.lang})</option>
  `)
  .join('');
}

function  setVoice(){
  msg.voice = voices.find(voice=>voice.name===this.value);
  toggle();
}

function toggle(start = true){
  speechSynthesis.cancel();

  if(start){
  speechSynthesis.speak(msg);
  }
}


function setOption(){
  console.log(this.name,this.value);//it will select either the rate or pitch ...
  msg[this.name]=this.value;

}

speechSynthesis.addEventListener('voiceschanged',populateVoices);
voicesDropdown.addEventListener('change',setVoice);
options.forEach(option=>option.
  addEventListener('change',setOption)
);
stopButton.addEventListener('click',toggle.bind(null,false));
speakButton.addEventListener('click',toggle);