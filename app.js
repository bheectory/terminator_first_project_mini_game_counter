
let kills = document.getElementById("kills");  
let reset0 = document.getElementById("reset0")
let saveEl = document.getElementById("save-El")

let count = 0
var countStr
function killFunc() {
     count +=  1
     kills.innerText = count
     }

function save() {

     countStr = count + " / "
     saveEl.textContent += countStr
     count = 0
     kills.textContent = count
}

function bam() {
     count = 0
     kills.textContent = count
     
     saveEl.textContent = "Previous High Scores 🥇 : "
        
}

