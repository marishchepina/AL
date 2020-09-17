let homePage = document.getElementById("btn--home");
const STEP1 = document.getElementById("btn--task1");
const STEP2 = document.getElementById("btn--task2");
const STEP3 = document.getElementById("btn--task3");
const STEP4 = document.getElementById("btn--task4");
let container = document.getElementById("container");
let wordList;
const MESSAGE = document.getElementById("message");
let wordlist1 = document.getElementById("btn--wordlist4-l1");
let wordlist2 = document.getElementById("btn--wordlist4-l2");
let wordlist3 = document.getElementById("btn--wordlist4-l3");
let wordlist5 = document.getElementById("btn--wordlist4-l5");
let taskButBlock =  document.getElementById("taskButBlock");
let wordlistButBlock =  document.getElementById("wordlistButBlock");
let audioFolder = "";
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



document.addEventListener('DOMContentLoaded', function(event) {
    MESSAGE.classList.add('top');
    MESSAGE.style.backgroundImage = "url('img/emotion/music.gif')";

});


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

homePage.onclick = function () {
    taskButBlock.classList.add('hide');
    wordlistButBlock.classList.remove('hide');
    MESSAGE.classList.add('top');
    MESSAGE.style.backgroundImage = "url('img/emotion/music.gif')";
};


  wordlist1.onclick  = function () {
    wordList = wordList1;
    wordsRadio =[];
    imgsRadio = [];
    taskButBlock.classList.remove('hide');
    wordlistButBlock.classList.add('hide');
    audioFolder = "4-l1";
    document.getElementById('wordlist-toggle').checked=false;
    document.getElementById('nav-toggle').checked=true;
};


wordlist2.onclick = function () {
    wordList = wordList2;
    wordsRadio = [];
    imgsRadio = [];
    taskButBlock.classList.remove('hide');
    wordlistButBlock.classList.add('hide');
    audioFolder = "4-l2";
    document.getElementById('wordlist-toggle').checked=false;
    document.getElementById('nav-toggle').checked=true;
};

wordlist3.onclick = function () {
    wordList = wordList2;
    wordsRadio = [];
    imgsRadio = [];
    taskButBlock.classList.remove('hide');
    wordlistButBlock.classList.add('hide');
    audioFolder = "4-l3";
    document.getElementById('wordlist-toggle').checked=false;
    document.getElementById('nav-toggle').checked=true;
};

wordlist5.onclick = function () {
    wordList = wordList5;
    wordsRadio = [];
    imgsRadio = [];
    taskButBlock.classList.remove('hide');
    wordlistButBlock.classList.add('hide');
    audioFolder = "4-l5";
    document.getElementById('wordlist-toggle').checked=false;
    document.getElementById('nav-toggle').checked=true;
};

STEP1.onclick = function () {
    removeClassBtnActiv();
    STEP1.classList.add('btn--active');
    hideMessage();
    renderWord(wordList);
    animate(wordList);
    document.getElementById('nav-toggle').checked=false;
}

STEP2.onclick = function () {
    removeClassBtnActiv();
    STEP2.classList.add('btn--active');
    stopAnimate();
    hideMessage();
    imgsForRadioButton(wordList, imgsRadio);
    turnArr(radioTurn);
    turnArr(wordTurn);
    renderWordTask2(wordList[wordTurn[wordTurnIndex]]);
    document.getElementById('nav-toggle').checked=false;
}

STEP3.onclick = function () {
    removeClassBtnActiv();
    STEP3.classList.add('btn--active');
    stopAnimate();
    hideMessage();
    wordsForRadioButton(wordList, wordsRadio);
    turnArr(radioTurn);
    turnArr(wordTurn);
    console.log(wordTurn);
    renderWordTask3(wordList[wordTurn[wordTurnIndex]]);
    document.getElementById('nav-toggle').checked=false;
}

STEP4.onclick = function () {
    removeClassBtnActiv();
    STEP4.classList.add('btn--active');
    stopAnimate();
    hideMessage();
    wordsForRadioButton(wordList, wordsRadio);
    turnArr(wordTurn);
    renderLetters(wordList[wordTurn[wordTurnIndex]]);
    renderWordTask4(wordList[wordTurn[wordTurnIndex]]);
    document.getElementById('nav-toggle').checked=false;
}


let cleanContainer = function(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

let hideMessage = function(){
    while (MESSAGE.firstChild) {
        MESSAGE.removeChild(MESSAGE.firstChild);
    }
    MESSAGE.classList.remove("top");
}

let messageSucces = function(){
    let audio = document.createElement('audio');
    MESSAGE.className = 'top circle';
    MESSAGE.style.backgroundImage = "url('img/emotion/glad.gif')";
    audio.src = `audio\\MESSAGE\\tada.mp3`;
    audio.play();
    setTimeout(function(){
        MESSAGE.classList.remove("top");
    }, 4000);
}

let messageFinish = function(){
    MESSAGE.className = 'top circle';
    let MESSAGE__text = document.createElement('div');
    MESSAGE.style.backgroundImage = "url('img/emotion/box.gif')";
    MESSAGE__text.innerText = "Завдання завершено!";
    MESSAGE.appendChild(MESSAGE__text);
}

let messageCry = function(){
    let audio = document.createElement('audio');
    MESSAGE.className = 'top circle';
    MESSAGE.style.backgroundImage = "url('img/emotion/cry.gif')";
    audio.src = `audio\\MESSAGE\\cry.mp3`;
    MESSAGE.appendChild(audio);
    audio.play();
    setTimeout(function(){
        MESSAGE.classList.remove("top");
    }, 4000);
}

let messageButtonNotPressed = function(){
    let audio = document.createElement('audio');
    MESSAGE.className = 'top circle';
    MESSAGE.style.backgroundImage = "url('img/emotion/lazy.gif')";
    audio.src = `audio\\MESSAGE\\lazy.mp3`;
    MESSAGE.appendChild(audio);
    audio.play();
    setTimeout(function(){
        MESSAGE.classList.remove("top");
    }, 4000);
}