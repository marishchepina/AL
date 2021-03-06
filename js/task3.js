let renderWordTask3 = function (word) {
    if (container.children.length > 0) {
    }
    else {
        let task3 = document.createElement('div');
        let task3__img = document.createElement('img');
        let task3__radioBlock = document.createElement('div');
        let verifyBut = document.createElement('button');
        task3.id = 'task3';
        task3__img.src = word.img;
        task3__img.className = "task3__img";
        task3__radioBlock.id = `task3__radioBlock`
        verifyBut.className = `btn`;
        verifyBut.id = `verifyBtn`;
        verifyBut.innerText = `Перевірити`;
        verifyBut.onclick = verifyTask3;
        verifyBut.className = `btn btn--verify`;
        container.appendChild(task3);
        task3.appendChild(task3__img);
        task3.appendChild(task3__radioBlock);
        radioButRenderTask3(radioTurn);
        task3.appendChild(verifyBut);
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
        if (userChoise == wordTurn[wordTurnIndex] && (wordTurnIndex !== (wordList.length-1))) {
            messageSucces();
            cleanContainer();
            wordTurnIndex++;
            renderWordTask3(wordList[wordTurn[wordTurnIndex]]);
            userChoise = undefined;
        }
        else if (userChoise == wordTurn[wordTurnIndex] && (wordTurnIndex == (wordList.length-1))) {
            messageFinish();
            cleanContainer();
            userChoise = undefined;
            wordTurnIndex = 0;
        }
        else {messageCry();}

    }
    else {messageButtonNotPressed();}
}

