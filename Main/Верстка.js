let button1 = document.querySelector('.left');
let button2 = document.querySelector('.right');
let container1 = document.querySelector('.container1');
let container2 = document.querySelector('.container2')
let aside1= document.querySelector('.aside1');
let aside2 = document.querySelector('.aside2');
let firstbox = document.querySelector('.firstbox');
let secondbox = document.querySelector('.secondbox')
button1.addEventListener('click', add);
function add(){
    firstbox.classList.toggle('active');
    container1.classList.toggle('active');
    aside1.classList.toggle('active');
    aside2.classList.toggle('active');
    secondbox.classList.toggle('active');
    container2.classList.toggle('active');
console.dir( firstbox)
}
button2.addEventListener('click', add1);
function add1(){
    add();

}