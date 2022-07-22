



const holeEls = document.querySelectorAll(".hole")
let score = 0;
let scoreDisplay = document.getElementById("score");


setInterval(() => {
    let randomHole = Math.floor(Math.random() * holeEls.length);
    holeEls[randomHole].classList.toggle("mole")
}, 500, 10);

let gameArena = document.querySelector("#whack-a-mole");

gameArena.addEventListener("click", event => {
    console.log(event)
    if (event.target.matches(".mole")) {
        console.log("clicked")
        event.target.classList.remove("mole");
        scoreDisplay.textContent = score ++
    }
})
