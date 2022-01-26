
// Drop down click events



const dropdownBtn= document.querySelector(".dropdown__button");
const dropdownMenu= document.querySelector(".dropdown__menu");


dropdownBtn.addEventListener('click', ()=> {

dropdownMenu.classList.toggle("hide");

});


// Drop down click events 



const dropdownBtn2= document.querySelector(".dropdown__button2");
const dropdownMenu2= document.querySelector(".dropdown__menu2");


dropdownBtn2.addEventListener('click', ()=> {

dropdownMenu2.classList.toggle("hide2");

});



function handleOnLoad(){
    window.location="http://localhost:5000/PR"}

const PrLink = document.getElementById('PR-notes');
const cb = document.getElementById('check')

PrLink.addEventListener('click', function (e) {
    if (!cb.checked) {
        e.preventDefault();
    }

   
   
});

