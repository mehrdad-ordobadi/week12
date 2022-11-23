const clickMeButton = document.querySelector('.click-me');
// console.log(clickMeButton)

function clickHandler (){
    alert('You clicked me!');
}
function changeBg (){
    // document.body.style.backgroundColor = 'pink'
    document.body.classList.add('bod')
}
function btnClicked() {
    if (clickMeButton.textContent === 'Click Me!'){
        clickMeButton.textContent = 'Clicked!'
    }
    else{
        clickMeButton.textContent = 'Click Me!'
    }
}
// clickMeButton.addEventListener('click',clickHandler,{once:true})
// clickMeButton.addEventListener('click',changeBg);
clickMeButton.addEventListener('click',btnClicked)

