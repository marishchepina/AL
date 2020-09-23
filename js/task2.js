let imgsForRadioButton = function (word, arr) {
    for (let i = 0; i < wordList.length; i++) {
        arr.push(word[i].img);
        console.log(wordList[i]);
        console.log(wordList.length);

    }
}

let renderWordTask2 = function (word) {
   // let i = 1;
    if (container.children.length > 0) {
    }
    else {
        let task2 = document.createElement('div');
        let task2__word = document.createElement('div');
        let task2__radioBlock = document.createElement('div');
        let verifyBut = document.createElement('button');
        task2.id = 'task2';
        task2__radioBlock.id = 'task2__radioBlock';
        task2.className = 'task2';
        task2__word.className = 'task2__word';
        task2__word.innerText = word.word;
        verifyBut.className = `btn btn--verify`;
        verifyBut.id = `verifyBtn`;
        verifyBut.innerText = `Перевірити`;
        verifyBut.onclick = verifyTask2;
        container.appendChild(task2);
        task2.appendChild(task2__word);
        task2.appendChild(task2__radioBlock);
        radioButRenderTask2(radioTurn);
        task2.appendChild(verifyBut);
    }
}


let radioButRenderTask2 = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let task2__radioBlock = document.getElementById("task2__radioBlock");
        let task2__radio = document.createElement('input');
        let task2__label = document.createElement('label');
        let task2__label__img = document.createElement('img');
        task2__radio.setAttribute("type", "radio");
        task2__radio.setAttribute("name", "radio");
        task2__radio.setAttribute("value", `${arr[i]}`);
        task2__radio.setAttribute("id", `radio${arr[i]}`);
        task2__radio.addEventListener('change', function () {
            userChoise = this.value;
        });
        task2__label.setAttribute("for", `radio${arr[i]}`);
        task2__label.className = 'task2__label';
        task2__label__img.src = imgsRadio[arr[i]];
        task2__radioBlock.appendChild(task2__radio);
        task2__radioBlock.appendChild(task2__label);
        task2__label.appendChild(task2__label__img);
    }
}

let verifyTask2 = function () {
    if (userChoise !== undefined) {
        if (userChoise == wordTurn[wordTurnIndex] && (wordTurnIndex !== (wordList.length-1))) {
            messageSucces();
            cleanContainer();
            wordTurnIndex++;
            renderWordTask2(wordList[wordTurn[wordTurnIndex]]);
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

