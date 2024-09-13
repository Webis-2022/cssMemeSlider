let slider = document.querySelector('.slider');
let sliderText = document.querySelector('.slider-text');
let btn2 = document.querySelector('.button2');
let sliderControls = document.querySelectorAll('.slider-controls');
let btnWrapper = document.querySelectorAll('.btn-wrapper');
console.log(btnWrapper)
let previousNumOfBtn = 1;
let arrOfImages = ["Did you do", "I did it", "Let's drink", "I don't drink"];
let arrOfText = ["Did you do the Meme Slider task?", "Yes, I did it!", "Let's drink friend!", "No, until finishing Front-end Course I have a dry law"];

function sliderInit() {
    // create picture
    let img = document.createElement('img');
    img.src = `img/${arrOfImages[0]}.jpg`;
    slider.appendChild(img);
    
    // show text
    let text = document.createElement('p');
    text.textContent = arrOfText[0];
    sliderText.appendChild(text);

}

function createImg(numOfBtn) {
    let img = document.createElement('img');
    img.src = `img/${arrOfImages[numOfBtn - 1]}.jpg`;
    img.classList.add('new-img');
    slider.appendChild(img);
}

function changeText(numOfBtn) {
    sliderText.innerHTML = `<p>${arrOfText[numOfBtn - 1]}</p>`;

}

function deleteImg() {
    document.querySelectorAll('.slider img')[0].remove();
}

const buttons = document.querySelectorAll('.square, .btn');
let countIfButton1Pressed = 0;
let countClicks = 0
buttons.forEach(button => {
    button.addEventListener('click', (event)=>{
        countClicks++;
        if (event.target.classList.contains('button1') || event.target.classList.contains('btn-wrapper1')) {
            countIfButton1Pressed;
        }
        let buttonClass = event.target.classList[1];
        let numOfBtn = buttonClass.slice(-1);
        if(previousNumOfBtn === numOfBtn || countIfButton1Pressed === 1 && countClicks === 1) {
            event.preventDefault();
        }
        else {
        createImg(numOfBtn);
        console.log('hi')
        sliderText.classList.add('hidden');

        setTimeout(() => {
            changeText(numOfBtn);
            sliderText.classList.remove('hidden');
        }, 1000);
        document.querySelector('.slider').classList.add('transition-left'); 
        }
        previousNumOfBtn = numOfBtn;
    })
})

slider.addEventListener('animationend', ()=> {
    
    document.querySelector('.slider').classList.remove('transition-left');
    deleteImg();
})

sliderInit();