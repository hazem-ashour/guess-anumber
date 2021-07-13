let guessNumber = document.querySelector('#guess-number');
let warningMassage = document.querySelector('.warning-massage')
let computerNumber = document.querySelector('#computer-number');
let playBtn = document.querySelector('.play-btn');
let resetBtn = document.querySelector('.reset-btn');
let resultDom = document.querySelector('.result');


    
    


playBtn.addEventListener('click', ()=>{
    if(guessNumber.value && guessNumber.value >0 && guessNumber.value <= 10 ){
        warningMassage.innerHTML = "";
        computerNumber.value = Math.floor(Math.random()*10);

    if (guessNumber.value == computerNumber.value ) {
        resultDom.innerHTML = `You Win`;
    } else {
        resultDom.innerHTML = `Try Again`;
        // location.reload();
    }
    }else {
        warningMassage.innerHTML = "Please Guess A Number between 0 and 10"
    }
    
})

resetBtn.addEventListener('click', () => {
    window.location.reload();
})







