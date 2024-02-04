const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const delBtn = document.getElementById('del')
const mnoBtn = document.getElementById('mno')
let action = '+'

plusBtn.onclick = function () {
    action = '+'
}
minusBtn.onclick = function () {
    action = '-'
}
delBtn.onclick = function () {
    action = '/'
}
mnoBtn.onclick = function () {
    action = '*'
}

function printResult(result){
    if(result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

submitBtn.onclick = function (){
    if (action == '+') {
        const sum = Number(input1.value) + Number(input2.value)
        printResult(sum)
    } else if (action == '-') {
        const sum = Number(input1.value) - Number(input2.value)
        printResult(sum)
    } else if (action == '/') {
        const sum = Number(input1.value) / Number(input2.value)
        printResult(sum)
    } else if (action == '*') {
        const sum = Number(input1.value) * Number(input2.value)
        printResult(sum)
    }
}