

let startEl = document.querySelector("#start")
let imgEl = document.querySelector("#img-pour")
let nameEl = document.querySelector(".name")
let latteStyles = ["rosetta", "heart", "tulip", "stack", "swan"]
startEl.addEventListener("click", function() {
    let selectRandom = Math.floor(Math.random() * latteStyles.length);
    let currentArt = latteStyles[selectRandom];

    resetGame()
    if (currentArt === "rosetta") {
        nameEl.textContent += "ROSETTA! ð"
        imgEl.src = "images/rosseta.jpeg"
    } else if (currentArt === "heart") {
        nameEl.textContent += "HEART! âĪïļ"
        imgEl.src = "images/heart.jpeg"
    } else if (currentArt === "tulip") {
        nameEl.textContent += "TULIP! ð·"
        imgEl.src = "images/tulip.jpeg"
    } else if (currentArt === "stack") {
        nameEl.textContent += "STACK! ð"
        imgEl.src = "images/stacks.webp"
    } else if (currentArt === "swan") {
        nameEl.textContent += "SWAN! ðĶĒ"
        imgEl.src = "images/swan.jpeg"
    }
    
    
})

function resetGame() {
    nameEl.textContent = "Lets pour a ..."
}
