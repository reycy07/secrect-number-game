const d = document;
let secrectNumberslist =[];
let maxTries = 10;
let secrectNumber;
let tries = 1;

d.addEventListener('DOMContentLoaded', startApp);

function startApp(){
    printInicalGame();
}

function assignText(element, text){
    let elementHTML = d.querySelector(element);
    elementHTML.textContent = text;
}


function userTry(){

    inputNumber = Number(d.querySelector('input').value);

    if (inputNumber === secrectNumber ){
        assignText('.texto__parrafo', `Acertaste el número 🥳 en ${tries} ${(tries === 1) ? 'vez' : 'veces'}`);
        d.querySelector('#reiniciar').removeAttribute('disabled');
    }else{
        if(inputNumber < secrectNumber){
            assignText('.texto__parrafo', `El numero secreto es mayor 😕`);
        }else{
            assignText('.texto__parrafo', `El numero secreto es menor 😫`);
        }
    }
    tries++;

    clearInput();
}


function printInicalGame() {
    assignText('h1', 'Juego del número secreto');
    assignText('.texto__parrafo', 'Indica un número del 1 al 10');
    secrectNumber = generateMathRandom();
    tries = 1;
}


function clearInput() {
    let inputNumber = d.querySelector('input');
    inputNumber.value = '';
}

function generateMathRandom(){
    let number = Math.floor((Math.random()*10)+1);
    console.log(number);
    console.log(secrectNumberslist);

    if(secrectNumberslist.length == maxTries){
        assignText('.texto__parrafo','Se acabaro los numeros secretos');
    }else{

        if(secrectNumberslist.includes(number)){
            return generateMathRandom();
        }else{
            secrectNumberslist.push(number);
            return number;
        }

    }


}

function restarGame() {

    printInicalGame();
    clearInput();
    d.querySelector('#reiniciar').setAttribute('disabled', true);

}

