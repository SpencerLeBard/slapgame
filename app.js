let health = 100

let opponentElem = document.getElementById('opponent')
let challengerNameElem = document.getElementById('challengerName')
let slapBtn = document.getElementById("slap")
let punchBtn = document.getElementById("punch")
let kickBtn = document.getElementById("kick")



let challengers = [{

    name: "Green Lantern",
    img: "green-lantern.jpg",
    health: 100,
    attacks: {
        slap: 5,
        punch: 10,
        kick: 15
    }
},
{

    name: "Bat Derp",
    img: "batmanderp.jpg",
    health: 100,
    attacks: {
        slap: 5,
        punch: 10,
        kick: 15
    }
},

{
    name: "Hulk",
    img: "hulk.jpg",
    health: 100,
    attacks: {
        slap: 5,
        punch: 10,
        kick: 15
    }
},
{
    name: "One Punch",
    img: "onepunch.jpg",
    health: 100,
    attacks: {
        slap: 1,
        punch: 2,
        kick: 5
    }
}
]

function drawOpponent() {
    opponentElem.innerHTML = `<img id="currentOpponent" class="" src="${challengers[0].img}"></img>`
    challengerNameElem.innerHTML = `<h1 class="text-light">${challengers[0].name}</h1>`


}


function drawHealth() {
    let healthElem = document.getElementById('health')
    healthElem.innerHTML = `${challengers[0].health}`
    if (challengers.length == 1 && challengers[0].health < 10) {
        if (!alert("HAHAHAHA YOU CAN'T BEAT ONEPUNCH FOOL")) {
            window.location.reload()
        }
    }
}


function attack(hit) {
    challengers[0].health -= challengers[0].attacks[hit]
    let colorChange = document.getElementById("currentOpponent")
    colorChange.classList.add('imgShadow')
    setTimeout(() => {
        let colorChange = document.getElementById("currentOpponent")
        colorChange.classList.remove('imgShadow')
    }, 300)
    if (challengers[0].health <= 0) {
        challengers.shift();
        drawOpponent()
    }
    drawHealth()


}

function getStarted() {
    document.getElementById("welcome").remove();
    let theseButtons = document.getElementById('buttons')
    theseButtons.innerHTML = `<div id="slap" class="btn btn-primary" onclick="attack('slap')">Slap</div>
        <div id="punch" class="btn btn-primary" onclick="attack('punch')">Punch</div>
        <div id="kick" class="btn btn-primary" onclick="attack('kick')">Kick</div>`
    let initHealth = document.getElementById('healthID')
    initHealth.innerHTML = ` <h4 class="text-light">Health: <span id="health">100</span></h4>`
    drawOpponent();
}

