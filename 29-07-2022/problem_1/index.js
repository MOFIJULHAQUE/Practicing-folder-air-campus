const grand = document.querySelector(".grandParent");

const parent = document.querySelector(".parent");

const child = document.querySelector(".child");

grand.addEventListener("click",()=>{
console.log("grand");
});
grand.removeEventListener("click",()=>{
    console.log("grand");
    });




parent.addEventListener("click",()=>{
    console.log("parent");
    });




    child.addEventListener("click",()=>{
        console.log("child");
        });