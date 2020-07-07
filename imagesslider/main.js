var i=0;
var images = [];
var time=3000;

images[0]='/home/bikram/Downloads/Photos/20191011_091921.jpg';
images[1]='/home/bikram/Downloads/Photos/20200329_193857.jpg';
images[2]='/home/bikram/Downloads/Photos/20200518_053331.jpg';
images[3]='/home/bikram/Downloads/Photos/LRM_EXPORT_20200309_132947.jpg';
images[4]='/home/bikram/Downloads/Photos/PicsArt_08-18-03.01.45.jpg';

function imageSlide(){
    document.slide.src=images[i];
    if(i<images.length-1){
        i++
    }else{
        i=0;
    }
    setTimeout("imageSlide()",time);
}
window.onload=imageSlide;