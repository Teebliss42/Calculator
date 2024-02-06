let smallContainer = document.getElementById("input1")
let bigContainer = document.getElementById("input2")
let changeNumber = 0
let firsValue = ''
let assign = ''
let isClear = ""
// let secondValue = ''
function numbers(number) {
    if (changeNumber == 1) {
        bigContainer.innerHTML = ""
        changeNumber = 0
    }
    bigContainer.innerHTML += number
    // secondValue = number
}
function operators(opr) {
    if (assign !== '') {
        equals()
        // if (assign){
        // equals() class...
    }
    smallContainer.innerHTML = bigContainer.innerHTML + opr
    changeNumber = 1
    assign = opr
    firsValue = bigContainer.innerHTML
}
function equals() {
    smallContainer.innerHTML = smallContainer.innerHTML + bigContainer.innerHTML + '='
    if (isClear == "") {
        smallContainer.innerHTML = ""
        bigContainer.innerHTML = bigContainer.innerHTML
        // smallContainer.innerHTML= bigContainer.innerHTML
    }
    if (assign == "+") {
        bigContainer.innerHTML = Number(firsValue) + Number(bigContainer.innerHTML)
    }
    if (assign == "-") {
        bigContainer.innerHTML = Number(firsValue) - Number(bigContainer.innerHTML)
    }
    if (assign == "/") {
        bigContainer.innerHTML = Number(firsValue) / (bigContainer.innerHTML)
    }
    if (assign == "*") {
        bigContainer.innerHTML = Number(firsValue) * (bigContainer.innerHTML)
    }

    if (bigContainer.innerHTML == -bigContainer.innerHTML) {
        bigContainer.innerHTML = -bigContainer.innerHTML
        smallContainer.innerHTML = -bigContainer.innerHTML + '='
    }
}

function clearIt() {
    bigContainer.innerHTML = ""
    smallContainer.innerHTML = ""
    assign = ""
}
function deleteIt() {
    bigContainer.innerHTML = bigContainer.innerHTML.slice(0, -1) 
}

function percentage() {
    bigContainer.innerHTML = bigContainer.innerHTML / 100
}

function reciprocal() {
    bigContainer.innerHTML = 1 / bigContainer.innerHTML
}

function squareIt() {
    // smallContainer.innerHTML = `sqr( ${bigContainer.innerHTML} )`
    smallContainer.innerHTML = 'sqr' + '( ' + bigContainer.innerHTML + ' )'
    bigContainer.innerHTML = bigContainer.innerHTML * bigContainer.innerHTML
}

function squareRoot() {
    smallContainer.innerHTML = `&#8730;( ${bigContainer.innerHTML} )`
    bigContainer.innerHTML = Math.sqrt(bigContainer.innerHTML)
}
function negative() {
    bigContainer.innerHTML = -bigContainer.innerHTML
}

// let str = 10
// console.log(str.padstart(10))
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part)

