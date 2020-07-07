const btn = document.querySelector('.switch-btn');
btn.addEventListener('click',function(){
    if(btn.classList.contains('slide')){
        btn.classList.remove('slide');
    }else{
        btn.classList.add('slide');
    }
})