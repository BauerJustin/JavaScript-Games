document.addEventListener('DOMContentLoaded', () => {

    // array of tiles
    const cardArray = [
        {
            name: 'red',
            img: 'images/red.png'
        },
        {
            name: 'red',
            img: 'images/red.png'
        },
        {
            name: 'blue',
            img: 'images/blue.png'
        },
        {
            name: 'blue',
            img: 'images/blue.png'
        },
        {
            name: 'yellow',
            img: 'images/yellow.png'
        },
        {
            name: 'yellow',
            img: 'images/yellow.png'
        },
        {
            name: 'lime',
            img: 'images/lime.png'
        },
        {
            name: 'lime',
            img: 'images/lime.png'
        },
        {
            name: 'orange',
            img: 'images/orange.png'
        },
        {
            name: 'orange',
            img: 'images/orange.png'
        },
        {
            name: 'purple',
            img: 'images/purple.png'
        },
        {
            name: 'purple',
            img: 'images/purple.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []
    const unflipped = 'images/smile.png'
    const flipped = 'images/blank.png'

    function generateBoard() {
        for (let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', unflipped)
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', flipped)
            cards[optionTwoId].setAttribute('src', flipped)
            alert('Same image!')
        }else if (cardsChosen[0] === cardsChosen[1]) {
            alert('Match found')
            cards[optionOneId].setAttribute('src', flipped)
            cards[optionTwoId].setAttribute('src', flipped)
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute('src', unflipped)
            cards[optionTwoId].setAttribute('src', unflipped)
            alert('Try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'You won!'
        }
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
          setTimeout(checkForMatch, 500)
        }
    }

    generateBoard()
})