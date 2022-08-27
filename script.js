var cOverlay = document.querySelector("#c");
var cOver = document.querySelector("#c-over");
var mOverlay = document.querySelector("#m");
var mOver = document.querySelector("#m-over");
var bOverlay = document.querySelector('button');
var bOver = document.querySelector("#b-over");

cOverlay.addEventListener("click", ()=>{
    
    cOver.classList.toggle("invisible");
    

});
mOverlay.addEventListener("click", ()=>{
    
    mOver.classList.toggle("invisible");
    

});
bOverlay.addEventListener("click", ()=>{
    
    bOver.classList.toggle("invisible");
    

});


