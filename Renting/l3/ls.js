const caro =document.querySelector(".crl");
const arr =document.querySelectorAll(".wrp i");
const firstCardwidth = caro.querySelector(".card").offsetWidth;


let isDragging = false ,startX,starts;

arr.forEach(btn => {
    btn.addEventListener("click",() =>{
        caro.scrollLeft += btn.id ==="left"? -firstCardwidth:firstCardwidth;
    });

});


const dragStart =(e) => {
    isDragging =true;
    caro.classList.add("dragging");
    startX =e.pageX;
    starts=caro.scrollLeft;
   
}

const dragging= (e) =>{
    if(!isDragging) return;

    caro.scrollLeft= starts - (e.pageX - startX);
}

const dragStop =() => {
    isDragging =false;
    caro.classList.remove("dragging");
   
}




caro.addEventListener("mousedown",dragStart);
caro.addEventListener("mousemove",dragging);
caro.addEventListener("mouseup",dragStop);
