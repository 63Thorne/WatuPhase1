//note
var cards=document.querySelectorAll('.card');
var button=document.querySelector('.click');
var button2=document.querySelector('.click2');

cards.forEach(card => {
    card.addEventListener('click',() =>{
        card.classList.toggle('is-flipped');
    })
});





