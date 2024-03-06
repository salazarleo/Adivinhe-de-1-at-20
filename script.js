'use strict';
/*
console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = 'Parabens'
document.querySelector('.number').textContent = 32
document.querySelector('.score').textContent = 45

document.querySelector('.guess').value = 89
console.log(document.querySelector('.guess').value = 89)

*/

const secretNumber = Math.trunc(Math.random() * 20) + 1


let score = 20

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = 'Sem numero!'

    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Parabens, você acertou!'

        document.querySelector('body').style.backgroundColor = '#60b347'

        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber

    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Muito Alto!'
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'Você perdeu!'
            document.querySelector('body').style.backgroundColor = 'red'
            document.querySelector('.number').style.width = '30rem'
        }

    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Muito Baixo!'
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'Você perdeu!'
            document.querySelector('body').style.backgroundColor = 'red'
            document.querySelector('.number').style.width = '30rem'
        }
    }
})


