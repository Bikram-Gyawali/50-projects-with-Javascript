// select the elements
const player = document.querySelector('.player');
let video = player.querySelector('.viewer');
const progress=player.querySelector('.progress');
const progressBar=player.querySelector('.progress__filled');
const toggle=player.querySelector('.toggle');
const skipButtons=player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
var mutebtn = document.querySelector('.mute');
var fullscreenbtn = document.querySelector('.fullscreenbtn');


// build functions
function togglePlay(){
    // console.log("dfgh",video);
    const method = video.paused ? 'play':'pause';
    video[method]();
    // if(video.paused){
    //     video.play();
    // }else{
    //     video.pause();
    // }

}
function updateButton(){
        const icon = this.paused ? '►':'||';
        console.log(icon);
        toggle.textContent=icon;
}

function skip(){
video.currentTime +=parseFloat(this.dataset.skip);
}

function handleRange(){
    video[this.name]=this.value;
}
function handleProgress(){
    const percent = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis=`${percent}%`;
}
function selfskip(e){
    const selfTime = (e.offsetX/progress.offsetWidth)*video.duration;
    // progress.style.flexBasis=`${selfTime}`;
    video.currentTime=selfTime;
}
function videoMute(){
    if(video.muted){
        video.muted = false;
		mutebtn.innerHTML = "Mute";
	} else {
		video.muted = true;
		mutebtn.innerHTML = "Unmute";
	
    }
}
function toggleFullScreen(){
	if(video.requestFullScreen){
		video.requestFullScreen();
	} else if(video.webkitRequestFullScreen){
		video.webkitRequestFullScreen();
	} else if(video.mozRequestFullScreen){
		video.mozRequestFullScreen();
	}
}

// hook up the event listeners
video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate',handleProgress);

toggle.addEventListener('click',togglePlay);
skipButtons.forEach(button=>button.addEventListener('click',skip));
ranges.forEach(range=>range.addEventListener('change',handleRange));
ranges.forEach(range=>range.addEventListener('mousemove',handleRange));


let mousedown =false;
progress.addEventListener('click',selfskip);
progress.addEventListener('mousemove',(e)=>mousedown && selfTime);
progress.addEventListener('mousedown',()=>mousedown=true);
progress.addEventListener('mouseup',()=>mousedown=true);


mutebtn.addEventListener("click",videoMute,false);
fullscreenbtn.addEventListener("click",toggleFullScreen,false);