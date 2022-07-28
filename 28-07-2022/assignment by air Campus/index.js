//1st task
console.log(document.querySelector('div').innerText='Mofijul Haque');



//2nd task
console.log(document.querySelectorAll('div')[1].innerText='I am Mofijul Haque , Student of Air-Campus BootCamp');





//3rd task
console.log(document.querySelectorAll('div')[2].style.color='red');








//4th task
console.log(document.querySelectorAll('.divs')[0].style.border = "thick solid #0000FF");
console.log(document.querySelectorAll('.divs')[0].innerText='Fourth');

console.log(document.querySelectorAll('.divs')[1].style.border = "thick solid #0070FF");
console.log(document.querySelectorAll('.divs')[1].innerText='Fifth');

console.log(document.querySelectorAll('.divs')[2].style.border = "thick solid #8000FF");
console.log(document.querySelectorAll('.divs')[2].innerText='Sixth');










//5th task
console.log(document.querySelector('#id1').append('AirCampus'));









//6th task(doubt)

var tag_0 = document. createElement("div");
var add_class = tag_0.classList.add('new_html');
var p = document.createElement("p");
var add_word = document. createTextNode("This is my first Assignment");






//7th task
var tag = document. createElement("h1"); // <p></p>
var text = document. createTextNode("My Experience with AirCampus");
tag. appendChild(text); // <p>My Experience with AirCampus</p>
var element = document. querySelectorAll("div")[9];// <div> <p>My Experience with AirCampus</p> </div>
var underline = element. appendChild(tag).style.textDecoration='underline'; //My Experience with AirCampus
var underline = element. appendChild(tag).style.fontWeight='bold';
var underline = element. appendChild(tag).style.fontSize='50px';
var underline = element. appendChild(tag).style.color='aqua';










//8th task
// console.log(document.getElementsByTagName('p')
// [3].innerText='Super Experience');