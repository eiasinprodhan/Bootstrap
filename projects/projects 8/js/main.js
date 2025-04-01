let root = document.getElementById("root");
let element = document.getElementById("element");

document.addEventListener("scroll",()=>{
    element.innerHTML = documentElement.scrollTop;
})