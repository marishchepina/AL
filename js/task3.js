
let renderWordTask3 = function (word) {
    if (container.children.length > 0) {
    }
    else {
        let task3 = document.createElement('div');
        let task3__img = document.createElement('img');
        let task3__radioBlock = document.createElement('div');
        //let audio = document.createElement('audio');
        let verifyBut = document.createElement('button');
        task3.id = 'task3';
        task3__img.src = word.img;
        //audio.src = `audio\\${getDigit(word.id)}.mp3`;
        //audio.className = `audio`;
        task3__radioBlock.id = `task3__radioBlock`
        verifyBut.className = `btn`;
        verifyBut.id = `verifyBtn`;
        verifyBut.innerText = `Перевірити`;
        verifyBut.onclick = verifyTask3;
        verifyBut.className = `btn btn--verify`;
        container.appendChild(task3);
        task3.appendChild(task3__img);
        task3.appendChild(task3__radioBlock);
        //task3.appendChild(audio);
        radioButRenderTask3(radioTurn);
        task3.appendChild(verifyBut);
        //audio.play();
    }
}


let radioButRenderTask3 = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let task3__radioBlock = document.getElementById("task3__radioBlock");
        let task3__radioBlock__radio = document.createElement('input');
        let task3__radioBlock__label = document.createElement('label');
        task3__radioBlock__radio.setAttribute("type", "radio");
        task3__radioBlock__radio.setAttribute("name", "radio");
        task3__radioBlock__radio.setAttribute("value", `${arr[i]}`);
        task3__radioBlock__radio.setAttribute("id", `radio${arr[i]}`);
        task3__radioBlock__radio.addEventListener('change', function () {
            userChoise = this.value;
        });
        task3__radioBlock__label.setAttribute("for", `radio${arr[i]}`);
        task3__radioBlock__label.innerText = wordsRadio[arr[i]];
        task3__radioBlock__label.className = `task3__label`;
        task3__radioBlock.appendChild(task3__radioBlock__radio);
        task3__radioBlock.appendChild(task3__radioBlock__label);
    }
}


let verifyTask3 = function () {
    if (userChoise !== undefined) {
        if (userChoise == wordTurn[wordTurnIndex]) {
            MESSAGE.classList.add('top');
            MESSAGE.innerText = `Правильно!!!`;
            wordTurnIndex++;
            if (wordTurnIndex == wordList.length) {
                MESSAGE.classList.add('top');
                MESSAGE.innerText = `${MESSAGE.innerText} Завдання виконано!`;

            }
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            renderWordTask3(wordList[wordTurn[wordTurnIndex]]);
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

