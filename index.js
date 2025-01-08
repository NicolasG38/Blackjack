
let hasBlackJack = false
let isAlive = true
let cardsEl=document.getElementById("card-el")
let sumEl=document.getElementById("sum-el")
let Message =document.getElementById("message")
let firstCard = Math.floor(Math.random() * 21)
let secondCard = Math.floor(Math.random() * 21)
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard

function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent= "Cards: "
        for(i=0; i<cards.length;i++){
       cardsEl.textContent+= cards[i]+" " 
    }
    sumEl.textContent= "Sum: "+ sum
        
    
    message=""

        if (sum <= 20) {
            message = "Do you want to draw a new card?"
       } else if (sum === 21) {
            message = "Wohoo! You've got Blackjack!"
            hasBlackJack = true
       } else {
            message = "You're out of the game!"
            isAlive = false
        }

        Message.textContent=message
    }

function addOne(){
    let card = Math.floor(Math.random() * 21)
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}

function reset(){
    firstCard=0
    secondCard=0
    cards=""
    cardsEl.textContent= "Cards: "
    sum=0
    sumEl.textContent="Sum: "
    firstCard = Math.floor(Math.random() * 21)
    secondCard = Math.floor(Math.random() * 21)
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    message=""
}