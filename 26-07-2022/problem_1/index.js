
let a = document.querySelector(".btn");
a.addEventListener("click",fn);
let div = document.querySelector("div");
function fn(){
    if(div.style.display == "none"){
        div.style.display = "Block";
    }else{
        div.style.display = "none";
    }
}






let heading = document.querySelector("h1");
let b = document.querySelector(".btn2");
b.addEventListener("mouseover",()=>heading.innerHTML="apne button2 dabaya hai");


