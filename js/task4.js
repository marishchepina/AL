const STEP4 = document.getElementById("task4");
const MESSAGE = document.getElementById("message");
let container = document.getElementById("container");
let verifyBut = document.getElementById("verifyBut");
let userChoise;
let wordsRadio = [];
let wordTurn = [];
var letters = [];
let wordTurnIndex = 0;
let userWordArray = [];


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


let wordsForRadioButton = function (word, arr) {
    for (let i = 0; i < wordList.length; i++) {
        arr.push(word[i].word);

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
        render(arr);
    }
}


let renderWord = function (word) {
    if (container.children.length > 0) {
    }
    else {
        let wordBlock = document.createElement('div');
        let wordBlock__img = document.createElement('img');
        let audio = document.createElement('audio');
        let verifyBut = document.createElement('button');
        let userWord = document.createElement('div');
        wordBlock.id = 'wordBlock';
        wordBlock.className = 'js-word';
        wordBlock__img.src = word.img;
        audio.src = `audio\\${getDigit(word.id)}.mp3`;
        audio.className = `audio`;
        userWord.setAttribute("id", `userWord`);
        verifyBut.className = `btn`;
        verifyBut.id = `verifyBtn`;
        verifyBut.innerText = `Перевірити`;
        verifyBut.onclick = verify;
        container.appendChild(wordBlock);
        wordBlock.appendChild(wordBlock__img);
        wordBlock.appendChild(audio);
        wordBlock.appendChild(userWord);
        wordBlock.appendChild(verifyBut);
        radioButRender(letters);
        audio.play();
    }
}

let renderLetters = function (word) {
    letters = word.word;

    letters = letters.split('');
    letters = random(letters);
    console.log(letters);
}

let radioButRender = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let wordBlock = document.getElementById("wordBlock");
        let wordBlock__radio = document.createElement('input');
        let wordBlock__label = document.createElement('label');
        wordBlock__radio.setAttribute("type", "radio");
        wordBlock__radio.setAttribute("name", "radio");
        wordBlock__radio.setAttribute("value", `${arr[i]}`);
        wordBlock__radio.setAttribute("id", `radio${arr[i]}`);
        wordBlock__radio.addEventListener('change', userWordMaking);
        wordBlock__label.setAttribute("for", `radio${arr[i]}`);
        wordBlock__label.innerText = arr[i];
        wordBlock.appendChild(wordBlock__radio);
        wordBlock.appendChild(wordBlock__label);
    }
}

STEP4.onclick = function () {
    /*    let buttons = document.getElementsByClassName('btn');
     for (item in buttons) {
     if (item.classList.contains("active")) {
     item.classlist.remove('active');
     }
     }*/
    wordsForRadioButton(wordList, wordsRadio);
    // turnArr(radioTurn);
    turnArr(wordTurn);
    renderLetters(wordList[wordTurn[wordTurnIndex]]);
    //console.log(renderLetterswordList[wordTurn[wordTurnIndex]]);
    STEP4.classList.add('btn--active');
    renderWord(wordList[wordTurn[wordTurnIndex]]);
    verifyBut.onclick = verify;
}


let userWordMaking = function () {
    userChoise = this.value;
    console.log(userChoise);
    if (userChoise !== undefined) {
        //userWord.setAttribute("id", `userWord`);
        container.appendChild(userWord);
        userWord.innerText = userWord.innerText + userChoise;
        userWordArray.push(userChoise);
        console.log(userWordArray);
    }
    else {
        MESSAGE.classList.add('top');
        MESSAGE.innerText = `Виберіть слово.`;
    }
}


let verify = function () {
    userWordArray = userWordArray.join('');
    //console.log(userWordArray);
    //console.log(wordList[wordTurn[wordTurnIndex]].word);


    if (userWordArray == wordList[wordTurn[wordTurnIndex]].word) {
        MESSAGE.classList.add('top');
        MESSAGE.innerText = `Правильно!!!`;
        wordTurnIndex++;
        if (wordTurnIndex == wordList.length){
            MESSAGE.classList.add('top');
            MESSAGE.innerText = `${MESSAGE.innerText} Завдання виконано!`;
        }
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        renderLetters(wordList[wordTurn[wordTurnIndex]]);
        renderWord(wordList[wordTurn[wordTurnIndex]]);
        userChoise = undefined;
        userWordArray = [];
    }
    else if (userWordArray === []){
        MESSAGE.classList.add('top');
        MESSAGE.innerText = `Введіть слово.`;
    }
    else {
        MESSAGE.classList.add('top');
        MESSAGE.innerText = `Помилка, спробуй ще раз.`;
        userChoise = undefined;
        userWordArray = [];
        let userWord = document.getElementById("userWord");
        userWord.innerText = '';
    }
}



