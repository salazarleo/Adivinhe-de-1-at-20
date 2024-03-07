'use strict';
/*
console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = 'Parabens'
document.querySelector('.number').textContent = 32
document.querySelector('.score').textContent = 45

document.querySelector('.guess').value = 89
console.log(document.querySelector('.guess').value = 89)

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


    if (!guess) {
        displayMessage('Sem numero!')

    } else if (guess === secretNumber) {
        displayMessage('Parabens, você acertou!')
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber

        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
    }


    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Muito Alto!' : 'Muito Baixo!')
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'Você perdeu!'
            document.querySelector('body').style.backgroundColor = 'red'
            document.querySelector('.number').style.width = '30rem'
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.message').textContent = 'Comece a adivinhar...'
})