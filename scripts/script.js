const clickMeButton = document.querySelector('.click-me');
// console.log(clickMeButton)
const myImage = document.querySelector('#shoppingcart')
const myContainer = document.querySelector('.button-container')
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
function updateImage(e) {
    // myImage.setAttribute('src','images/cart.png')
    myImage.src = 'images/cart.png'
    myImage.setAttribute('alt','Shopping Cart Logo')
    myImage.setAttribute('width','100')
    myImage.setAttribute('height','100')
    // console.log(e.target)
}
function changeBGGreen(e){
    if(e.target.tagName === 'BUTTON'){
    // e.target.style.backgroundColor = 'green'
    // console.log(e)
    e.target.classList.add('bggreen')
    }
}
function changeTextColor(e){
    e.target.style.color = e.target.textContent
}
// clickMeButton.addEventListener('click',clickHandler,{once:true})
// clickMeButton.addEventListener('click',changeBg);
// clickMeButton.addEventListener('click',btnClicked)
// clickMeButton.addEventListener('click',updateImage)


myContainer.addEventListener('mouseover',changeBGGreen)
myContainer.addEventListener('mouseover',changeTextColor)
