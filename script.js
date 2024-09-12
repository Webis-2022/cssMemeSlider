let slider = document.querySelector('.slider');
let sliderText = document.querySelector('.slider-text');
let btn2 = document.querySelector('.button2');
let sliderControls = document.querySelectorAll('.slider-controls');
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

sliderControls.forEach(button => {
    button.addEventListener('click', (event)=>{
        console.log(previousNumOfBtn);
        let buttonClass = event.target.classList[1];
        let numOfBtn = buttonClass.slice(-1);
        console.log(numOfBtn);
        if(previousNumOfBtn === numOfBtn) {
            event.preventDefault();
        }
        else {
        createImg(numOfBtn);
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