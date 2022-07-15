let a = document.getElementById("message-el")
console.log(a);
let player = {
    name: "Player",
    chips: 200
}
console.log(player);
let dealerCards = []
console.log(dealerCards);
let myCards = []
console.log(myCards);
let mySum = 0
console.log(mySum)
let dealerSum = 0
console.log(dealerSum);
let playerHasBlackJack = false
let playerIsAlive = false
let dealerIsAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let dealerEl = document.querySelector("#dealer-el")
let dealerSumEl = document.querySelector("#dealer-total")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    playerIsAlive = true
    dealerIsAlive = true
    let myFirstCard = getRandomCard()
    let mySecondCard = getRandomCard()
    let dealerFirstCard = getRandomCard()
    let dealerSecondCard = getRandomCard()
    myCards = [myFirstCard, mySecondCard]
    dealerCards = [dealerFirstCard, dealerSecondCard]
    mySum = myFirstCard + mySecondCard
    dealerSum = dealerFirstCard + dealerSecondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Your Cards: "
    for (let i = 0; i < myCards.length; i++) {
        cardsEl.textContent += myCards[i] + " "
    }
    dealerEl.textContent = "Dealer Cards: "
    for (let j = 0; j < dealerCards.length; j++) {
        dealerEl.textContent += dealerCards[j] + " "
    }
    dealerSumEl.textContent = "Dealer Total: " + dealerSum
    sumEl.textContent = "Your Total: " + mySum
    if (mySum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (mySum === 21) {
        message = "You've got Blackjack!"
        PlayerHasBlackJack = true

    } else {
        message = "You're out of the game!"
        playerIsAlive = false
    }
    messageEl.textContent = message
}


function playerNewCard() {
    if (playerIsAlive === true && playerHasBlackJack === false) {
        let newPlayerCard = getRandomCard()
        mySum += newPlayerCard
        myCards.push(newPlayerCard)
        renderGame()        
    }
}

let stayEl = document.querySelector("#player-stay")
stayEl.addEventListener("click", function() {
    for (let k = 0; k < dealerCards.length; k++) {
        if (dealerIsAlive && dealerSum < 17) {
            let newDealerCard = getRandomCard()
            dealerSum += newDealerCard
            dealerCards.push(newDealerCard)
        }
        renderGame()
    }
    
})

