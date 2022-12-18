
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const result = document.getElementById('result')

function variables(){
    inputValuePageFirst = input1.value
    inputValuePageSecond = input2.value
}

function clearInput(){
    input1.value = ''
    input2.value = ''
}

function getValueInputPlus(){
    variables()
    const resultNumber = +inputValuePageFirst + +inputValuePageSecond
 result.innerHTML = resultNumber
 clearInput()
}

function getValueInputMinus(){
    variables()
    const resultNumber = +inputValuePageFirst - +inputValuePageSecond
 result.innerHTML = resultNumber
 clearInput()
}

function getValueInputTimes(){
    variables()
    const resultNumber = +inputValuePageFirst * +inputValuePageSecond
 result.innerHTML = resultNumber
 if (inputValuePageSecond==0){
    alert('А это необходимо? Все равно же будет 0')
}
 clearInput()
}

function getValueInputDivide(){
    const inputValuePageFirst = input1.value
    const inputValuePageSecond = input2.value
    const resultNumber = +inputValuePageFirst / +inputValuePageSecond
 result.innerHTML = resultNumber
 if (inputValuePageSecond==0){
    alert('делить на 0 нельзя же,ну')
}
 clearInput()
}

