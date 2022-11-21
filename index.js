// Code your solutions in this file
const messages = ["Guadalupe", "Ollie", "Aki", "surprise"]


function writeCards(messages) {
    for (let i = 0; i < messages.length -1; i++) {
        console.log (`'Thank You, ${messages[i]}, for the wonderful ${messages[3]} gift!'`)
        
       
    }
    
    return messages
}

console.log (writeCards(messages))

let countDown = 10
while (countDown > -1){
    console.log(countDown--)
}
  
    