const STEP3 = document.getElementById("task3");
const MESSAGE = document.getElementById("message");
let container = document.getElementById("container");
let userChoise;
let wordsRadio = [];
let wordTurn = [];
var radioTurn = [];
let wordTurnIndex = 0;


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
    for (let i = 0; i < wordList.length; i++){
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
    else{render(arr);}
}


let renderWord = function (word) {
    if (container.children.length > 0) {
    }
    else {
        let wordBlock = document.createElement('div');
        let wordBlock__img = document.createElement('img');
        let audio = document.createElement('audio');
        let verifyBut = document.createElement('button');
        wordBlock.id = 'wordBlock';
        wordBlock.className = 'js-word';
        wordBlock__img.src = word.img;
        audio.src = `audio\\${getDigit(word.id)}.mp3`;
        audio.className = `audio`;
        verifyBut.className = `btn`;
        verifyBut.id = `verifyBtn`;
        verifyBut.innerText = `Перевірити`;
        verifyBut.onclick = verify;
        container.appendChild(wordBlock);
        wordBlock.appendChild(wordBlock__img);
        wordBlock.appendChild(audio);
        wordBlock.appendChild(verifyBut);
        radioButRender(radioTurn);
        audio.play();
    }
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
            wordBlock__radio.addEventListener('change', function () {
                userChoise = this.value;
            });
            wordBlock__label.setAttribute("for", `radio${arr[i]}`);
            wordBlock__label.innerText = wordsRadio[arr[i]];
            wordBlock.appendChild(wordBlock__radio);
            wordBlock.appendChild(wordBlock__label);
        }
    }

    STEP3.onclick = function () {
        /*    let buttons = document.getElementsByClassName('btn');
         for (item in buttons) {
         if (item.classList.contains("active")) {
         item.classlist.remove('active');
         }
         }*/
        wordsForRadioButton(wordList, wordsRadio);
        turnArr(radioTurn);
        turnArr(wordTurn);
        console.log(wordTurn);
        STEP3.classList.add('btn--active');
        renderWord(wordList[wordTurn[wordTurnIndex]]);

        // showWord(wordBlockst);
    }

    let verify = function () {
        if (userChoise !== undefined) {
            if (userChoise == wordTurn[wordTurnIndex]) {
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
                renderWord(wordList[wordTurn[wordTurnIndex]]);
                userChoise = undefined;
            }
            else {
                MESSAGE.classList.add('top');
                MESSAGE.innerText = `Направильно. Вибрано  ${userChoise} radiobutton`;
            }

        }
        else {
            MESSAGE.classList.add('top');
            MESSAGE.innerText = `Виберіть слово.`;
        }
    }
