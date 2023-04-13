const cardArray = [
    {
        names:'Fries',
        img:'images/Fries.jpg',
    },
    {
        names:'Burger',
        img:'images/Burger.jpg',
    },
    {
        names:'Pizza',
        img:'images/Pizza.jpg',
    },
    {
        names:'Caesar-Salad',
        img:'images/Salad.jpg',
    },
    {
        names:'Red-Curry',
        img:'images/Curry.webp',
    },
    {
        names:'Pasta',
        img:'images/Pasta.jpg',
    },
    {
        names:'Fries',
        img:'images/Fries.jpg',
    },
    {
        names:'Burger',
        img:'images/Burger.jpg',
    },
    {
        names:'Pizza',
        img:'images/Pizza.jpg',
    },
    {
        names:'Caesar-Salad',
        img:'images/Salad.jpg',
    },
    {
        names:'Red-Curry',
        img:'images/Curry.webp',
    },
    {
        names:'Pasta',
        img:'images/Pasta.jpg',
    },

]
cardArray.sort(() => 0.5 - Math.random()) // Learn about sort
console.log(cardArray)

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []

function boardCreator () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', '/images/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', cardFlip)
        grid.appendChild(card)
    }
}

function cardFlip() {
    let cardId = this.getAttribute('data-id')
    console.log('clicked', cardId)
    cardsChosen.push(cardArray[cardId].names)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
    console.log(cardsChosenIds)
}
function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionAId = cardsChosenIds[0]
    const optionBId = cardsChosenIds[1]
   
    if (optionAId == optionBId) {
        alert("You've clicked the same image!")
        cards[optionAId].setAttribute('src', '/images/blank.jpg')
        cards[optionBId].setAttribute('src', '/images/blank.jpg')       
    } else if (cardsChosen[0] === cardsChosen[1]) {
        alert("You've got a match")
        cards[optionAId].setAttribute('src', '/images/black.webp')
        cards[optionBId].setAttribute('src', '/images/black.webp')
        cards[optionAId].removeEventListener('click', cardFlip)
        cards[optionBId].removeEventListener('click', cardFlip)
        cardsWon.push(cardsChosen)
    } else{
        cards[optionAId].setAttribute('src', '/images/blank.jpg')
        cards[optionBId].setAttribute('src', '/images/blank.jpg') 
        alert('Wrong, Try Again')
    }
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === 6)
    {
        resultDisplay.textContent = "Congratulations!!! You've won"
    }
}

boardCreator()