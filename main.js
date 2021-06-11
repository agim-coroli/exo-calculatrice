let btnTab = ["9", "8", "7", "+", "6", "5", "4", "-", "3", "2", "1", "*", "C", "0", ".", "/"]



// HTML
let body = document.querySelector("body")
let script = document.querySelector("script")
let firstDiv = document.createElement("div");
firstDiv.className = "premiereDiv"
body.insertBefore(firstDiv, script);

// les boutons
btnTab.forEach(element => {
    let boutons = document.createElement("button")
    boutons.innerHTML = element
    firstDiv.appendChild(boutons)
});
let boutonEgal = document.createElement("button")
boutonEgal.innerHTML = "="
body.appendChild(boutonEgal)

// Display chiffre/calcul
let inputReparti = document.createElement("input");
inputReparti.type = "text"
body.insertBefore(inputReparti, firstDiv);

let touche = Array.from(document.querySelectorAll("button"))

touche.forEach(element => {
    element.addEventListener("click", () => {
        if (element.innerText == "=") {
            let test = eval(inputReparti.value)
            inputReparti.value = Math.round(test)
        } else if (element.innerText == "C") {
            inputReparti.value = ""
        } else if (element.innerText == ".") {
            inputReparti.value = "non fonctionelle"
        } else {
            inputReparti.value += element.innerText
        }
    })
});
// Assigne des touches
window.addEventListener("keydown", (e) => {
    if (e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4" || e.key == "5" || e.key == "6" || e.key == "7" || e.key == "8" || e.key == "9" || e.key == "0" || e.key == "." || e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/") {
        inputReparti.value += e.key
    } else if (e.key == "Enter" || e.key == "=") {
        let test = eval(inputReparti.value)
        inputReparti.value = Math.round(test)
    } else if (e.key == "Escape") {
        inputReparti.value = ""
    } else if (e.key == "Backspace") {
        let x = inputReparti.value
        inputReparti.value = x.substring(0, x.length - 1)
    }
})


    