const STEP3 = document.getElementById("task3");
const MESSAGE = document.getElementById("message");
let container = document.getElementById("container");

let renderTurn = [3, 5, 1, 4, 2, 6];
let step3Index = 0;
let userChoise;
let words = ["one", "two", "three", "four", "five", "six"];


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

let renderWord = function (word) {
    if (container.children.length > 0) {
    }
    else {
        let wordBlock = document.createElement('div');
        let wordBlock__img = document.createElement('img');
        let audio = document.createElement('audio');
        let verifyBut = document.createElement('button');
        wordBlock.id = word.id;
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

        for (let k = 0; k < renderTurn.length; k++) {
            let wordBlock__radio = document.createElement('input');
            let wordBlock__label = document.createElement('label');
            wordBlock__radio.setAttribute("type", "radio");
            wordBlock__radio.setAttribute("name", "radio");
            wordBlock__radio.setAttribute("value", `${k}`);
            wordBlock__radio.addEventListener('change', function() {
                userChoise = this.value;
                console.log(userChoise);
            });
            wordBlock__label.setAttribute("for", `radio${k + 1}`);
            wordBlock__label.innerText = words[k];
            wordBlock.appendChild(wordBlock__radio);
            wordBlock.appendChild(wordBlock__label);
        }
        wordBlock.appendChild(verifyBut);
    }
}


STEP3.onclick = function () {
    /*    let buttons = document.getElementsByClassName('btn');
     for (item in buttons) {
     if (item.classList.contains("active")) {
     item.classlist.remove('active');
     }
     }*/
    STEP3.classList.add('btn--active');
    renderWord(wordList[step3Index]);

    // showWord(wordBlockst);
}

let verify = function () {
    if(userChoise !== undefined){
        if (userChoise == step3Index) {
            MESSAGE.classList.add('top');
            MESSAGE.innerText = `Правильно!!!`;
            step3Index++;
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            renderWord(wordList[step3Index]);
            userChoise = undefined;
            console.log(step3Index);
        }
        else {
            MESSAGE.classList.add('top');
            MESSAGE.innerText = `Направильно. Вибрано  ${userChoise} radiobutton`;
            console.log(userChoise);
        }

    }
    else {
        MESSAGE.classList.add('top');
        MESSAGE.innerText = `Виберіть слово.`;
    }
}
