var video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const copy = document.getElementById('cloned');

 function getVideo(){
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(function (stream) {
            video.srcObject = stream;
          })
          .catch(function (err0r) {
            console.log("Something went wrong!");
          });
      }
}

getVideo();

function paintToCanvas(){
 const width = video.width;
 const height = video.height;
 canvas.width=width;
 canvas.height=height;

 return setInterval(()=>{
     ctx.drawImage(video, 0, 0, width,height);
 },16);


}


// let chap = navigator.cloneNode(true);
// canvas.appendChild(chap);