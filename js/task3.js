const STEP3 = document.getElementById("task3");
const MESSAGE = document.getElementById("message");
let container = document.getElementById("container");
let wordUl = document.createElement('ul');
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
        let wordLi = document.createElement('li');
        let wordLi__img = document.createElement('img');
        let audio = document.createElement('audio');
        let verifyBut = document.createElement('button');

        wordLi.id = word.id;
        wordLi.className = 'js-word';
        wordLi__img.src = word.img;
        audio.src = `audio\\${getDigit(word.id)}.mp3`;
        audio.className = `audio`;
        verifyBut.className = `btn`;
        verifyBut.id = `verifyBtn`;
        verifyBut.innerText = `Перевірити`;
        verifyBut.onclick = verify;
        container.appendChild(wordUl);
        wordUl.appendChild(wordLi);
        wordLi.appendChild(wordLi__img);
        wordLi.appendChild(audio);

        for (let k = 0; k < renderTurn.length; k++) {
            let wordLi__radio = document.createElement('input');
            let wordLi__label = document.createElement('label');
            wordLi__radio.setAttribute("type", "radio");
            wordLi__radio.setAttribute("name", "radio");
            wordLi__radio.setAttribute("id", `radio${k + 1}`);
            wordLi__radio.setAttribute("value", `${k}`);
            wordLi__radio.setAttribute("class", `radio`);
            wordLi__radio.addEventListener('change', function() {
                userChoise = this.value;
                console.log(userChoise);
            });
            wordLi__label.setAttribute("for", `radio${k + 1}`);
            wordLi__label.innerText = words[k];

            wordLi.appendChild(wordLi__radio);
            wordLi.appendChild(wordLi__label);
        }
        wordLi.appendChild(verifyBut);
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

    // showWord(wordList);
}

let verify = function () {
    if(userChoise !== null){
        if (userChoise == step3Index) {
            MESSAGE.classList.add('top');
            MESSAGE.innerText = `Правильно!!!`;
            step3Index++;
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            renderWord(wordList[step3Index]);
            console.log(step3Index);
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
    /*var rad = document.getElementsByClassName('radio');
    for (var i = 0; i < rad.length; i++) {
        if (rad[i].checked) {
            let choise = rad[i].value;
            console.log(typeof choise);
            if (choise == step3Index) {
                MESSAGE.classList.add('top');
                MESSAGE.innerText = `Правильно!!!`;
                step3Index++;
                while (container.firstChild) {
                    container.removeChild(container.firstChild);
                }
                renderWord(wordList[step3Index]);
                console.log(step3Index);
            }
            else {
                MESSAGE.classList.add('top');
                MESSAGE.innerText = `Направильно. Вибрано  ${i} radiobutton`;
            }
        }
        else {
            MESSAGE.classList.add('top');
            MESSAGE.innerText = `Виберіть слово.`;
        }
    }*/
}
