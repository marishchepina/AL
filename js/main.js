const STEP1 = document.getElementById("btn--task1");
const STEP2 = document.getElementById("btn--task2");
const STEP3 = document.getElementById("btn--task3");
const STEP4 = document.getElementById("btn--task4");
let container = document.getElementById("container");
const MESSAGE = document.getElementById("message");
let index = 0;
let cycleCounter = 0;
let userChoise;
let imgsRadio = [];
let wordTurn = [];
let radioTurn = [];
let wordsRadio = [];
let wordTurnIndex = 0;
let task4__userWordText = ``;
let letters = [];
let userWordArray = [];


function random(arr) {
    var j, temp;
    for (var i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

let getDigit = function (digitName) {
    switch (digitName) {
        case "one":
            return 1;
        case "two":
            return 2;
        case "three":
            return 3;
        case "four":
            return 4;
        case "five":
            return 5;
        case "six":
            return 6;
    }
}

let turnArr = function (arr) {
    if (arr.length === 0) {
        for (let i = 0; i < wordList.length; i++) {
            arr.push(i);
        }
        random(arr);
        return arr;

    }
    else {
        random(arr);
    }
}


let wordsForRadioButton = function (word, arr) {
    for (let i = 0; i < wordList.length; i++) {
        arr.push(word[i].word);

    }
}

let removeClassBtnActiv = function () {
    let buttons = document.getElementsByClassName("btn--active");
    while (buttons.length > 0) {
        buttons[0].classList.remove("btn--active");
    }
}

STEP1.onclick = function () {
    removeClassBtnActiv;
    STEP1.classList.add('btn--active');
    renderWord(wordList);
    animate(wordList);
    document.getElementById('nav-toggle').checked=false;
}

STEP2.onclick = function () {
    removeClassBtnActiv;
    STEP2.classList.add('btn--active');
    stopAnimate();
    imgsForRadioButton(wordList, imgsRadio);
    turnArr(radioTurn);
    turnArr(wordTurn);
    renderWordTask2(wordList[wordTurn[wordTurnIndex]]);
    document.getElementById('nav-toggle').checked=false;
}

STEP3.onclick = function () {
    removeClassBtnActiv;
    STEP3.classList.add('btn--active');
    wordsForRadioButton(wordList, wordsRadio);
    turnArr(radioTurn);
    turnArr(wordTurn);
    console.log(wordTurn);
    renderWordTask3(wordList[wordTurn[wordTurnIndex]]);
    document.getElementById('nav-toggle').checked=false;
}

STEP4.onclick = function () {
    removeClassBtnActiv;
    STEP4.classList.add('btn--active');
    wordsForRadioButton(wordList, wordsRadio);
    turnArr(wordTurn);
    renderLetters(wordList[wordTurn[wordTurnIndex]]);
    renderWordTask4(wordList[wordTurn[wordTurnIndex]]);
    verifyBut.onclick = verifyTask4;
    document.getElementById('nav-toggle').checked=false;
}