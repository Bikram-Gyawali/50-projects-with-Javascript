let filterInput = documenet.getElementById('filterInput');

filterInput.addEventListener('keyup',filterNames);

function filterNames(){
    let filterValue = document.getElementById('filterInput').vlaue.toUpperCase();


// get names ul

let ul =document.getElementById('names');

// get li from ul 
let li = ul.querySelectorAll('li.collection-item');

for(let i=0;i<li.length;i++){
    let a = li[i].getElementsByTagName('a')[0];

    // if matched 
    if(a.innerHTML.toUpperCase().indexOf(filterValue)>-1){
        li[i].style.display = '';
    }else{
        li[i].style.display='none';
    }
}
}
