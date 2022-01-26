let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{
        logoSpan.forEach((span,idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1)*400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        },2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        },2300)
    })


})

const dropdownBtn= document.querySelector(".dropdown__button");
const dropdownMenu= document.querySelector(".dropdown__menu");


dropdownBtn.addEventListener('click', ()=> {

dropdownMenu.classList.toggle("hide");

});


let tabPanes = document.getElementsByClassName("tab-header")[0].getElementsByTagName("div");

for(let i=0;i<tabPanes.length;i++){
    tabPanes[i].addEventListener("click",function(){
        document.getElementsByClassName("tab-header")
        [0].getElementsByClassName("active")
        [0].classList.remove("active");
        tabPanes[i].classList.add("active");

        document.getElementsByClassName("tab-content")
        [0].getElementsByClassName("active")
        [0].classList.remove("active");

        document.getElementsByClassName("tab-content")
        [0].getElementsByClassName("tab-body")
        [i].classList.add("active");
        


        



    });
};


function toggleForm(){
    document.body.classList.toggle('activeForm');
}

//
var cards=document.querySelectorAll('.card');
var button=document.querySelector('.click');
var button2=document.querySelector('.click2');

cards.forEach(card => {
    card.addEventListener('click',() =>{
        card.classList.toggle('is-flipped');
    })
});


