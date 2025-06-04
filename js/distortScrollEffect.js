const content = document.querySelector(".section");
let currentPos = window.pageYOffset;

const callDistort = function(){
    const newPos = window.pageYOffset;
    const diff = newPos - currentPos;
    const speed = diff *0.35;

    content.style.transform = "skewY(" + speed +"deg)";
    currentPos= newPos;
    requestAnimationFrame(callDistort);
}
callDistort();