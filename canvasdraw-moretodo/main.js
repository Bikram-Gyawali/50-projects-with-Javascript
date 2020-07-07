const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const clear = document.getElementById('clear');
 

ctx.strokeStyle='#BADA55';
ctx.linejoin='round';
ctx.lineCap='round';
ctx.lineWidth=30;

let isDrawing = false;
let lastX = 0;
let lastY=0;
let hue = 0;
let direction=true;

let path = [];

function draw(e){
        if(!isDrawing) return; //stop running function
    console.log(e);
    ctx.strokeStyle=`hsl(${hue},100%,40%)`;
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX,lastY);
    // go to
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    [lastX,lastY]=[e.offsetX,e.offsetY];
    path.push([e.offsetX,e.offsetY]);
    hue++;
    if(hue>=360){
        hue=0;
    }

    
    // =======For changing the line width

    // if(ctx.lineWidth >= 100 || ctx.lineWidth<=1){ 
    //     direction =!direction;  
    // }
    // if(direction){
    //     ctx.lineWidth++
    // }else{
    //     ctx.lineWidth--;
    // }
}

canvas.addEventListener('mousedown',(e) => {
    isDrawing= true;
    [lastX,lastY]=[e.offsetX,e.offsetY];
});
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',()=>isDrawing= false);
canvas.addEventListener('mouseout',()=>isDrawing= false);


// clearing the canvaas
clear.addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
},false);  



// =========FOR ERASER============


// ========CTRL Z function
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'z') {
      
    }
    console.log(event);
  });

