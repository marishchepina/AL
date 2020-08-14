let renderWordTask4 = function (word) {
    if (container.children.length > 0) {
    }
    else {
        let task4 = document.createElement('div');
        let task4__img = document.createElement('img');
        let audio = document.createElement('audio');
        let verifyBut = document.createElement('button');
        let task4__userWord = document.createElement('input');
        let task4__letters = document.createElement('div');
        task4.id = 'task4';
        task4__img.src = word.img;
        audio.src = `audio\\${getDigit(word.id)}.mp3`;
        audio.className = `audio`;
        task4__userWord.setAttribute("id", `task4__userWord`);
        task4__userWord.setAttribute("placeholder", `слово`);
        task4__letters.setAttribute("id", `task4__letters`);
        verifyBut.className = `btn btn--verify`;
        verifyBut.id = `verifyBtn`;
        verifyBut.innerText = `Перевірити`;
        verifyBut.onclick = verifyTask4;
        task4__letters.className = 'task4__letters';
        container.appendChild(task4);
        task4.appendChild(task4__img);
        task4.appendChild(audio);
        task4.appendChild(task4__userWord);
        task4.appendChild(task4__letters);
        radioButRenderTask4(letters);
        setTimeout(function(){
            audio.play();
        }, 4500);
        task4.appendChild(verifyBut);
    }
}

let renderLetters = function (word) {
    letters = word.word;
    letters = letters.split('');
    letters = random(letters);
}

let radioButRenderTask4 = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let task4__letters = document.getElementById("task4__letters");
        let task4__letters__radio = document.createElement('input');
        let task4__letters__label = document.createElement('label');
        task4__letters__radio.setAttribute("type", "radio");
        task4__letters__radio.setAttribute("name", "radio");
        task4__letters__radio.setAttribute("value", `${arr[i]}`);
        task4__letters__radio.addEventListener('change', userWordMaking);
        task4__letters__radio.setAttribute("id", `radio--${i}`);
        task4__letters__label.setAttribute("for", `radio--${i}`);
        task4__letters__label.className = 'task4__label';
        task4__letters__label.innerText = arr[i];
        task4__letters.appendChild(task4__letters__radio);
        task4__letters.appendChild(task4__letters__label);
    }
}

let userWordMaking = function () {
    let task4__userWord = document.getElementById("task4__userWord");
    clicked = this;
    userChoise = this.value;
    task4__userWordText = task4__userWordText + userChoise;
    if (userChoise !== undefined) {
        task4__userWord.setAttribute("value", `${task4__userWordText}`);
        userWordArray.push(userChoise);
        let label = this.nextSibling;
        label.classList.add('disabled');
    }
    else {
        MESSAGE.classList.add('top');
        MESSAGE.innerText = `Виберіть слово.`;
    }
}

let verifyTask4 = function () {
    console.log(wordList[wordTurn[wordTurnIndex]].word);
    console.log(userWordArray);
    userWordArray = userWordArray.join('');
    if (userChoise !== undefined) {
        if (userWordArray == wordList[wordTurn[wordTurnIndex]].word && (wordTurnIndex !== (wordList.length-1))) {
            messageSucces();
            task4__userWordText = ``;
            task4__userWord.setAttribute("value", `${task4__userWordText}`);
            cleanContainer();
            userWordArray = [];
            wordTurnIndex++;
            renderLetters(wordList[wordTurn[wordTurnIndex]]);
            renderWordTask4(wordList[wordTurn[wordTurnIndex]]);
            userChoise = undefined;
        }
        else if (userWordArray == wordList[wordTurn[wordTurnIndex]].word && (wordTurnIndex == (wordList.length-1))) {
            messageFinish();
            cleanContainer();
            userChoise = undefined;
            wordTurnIndex = 0;
            userWordArray = [];
            task4__userWordText = ``;
        }
        else {
            messageCry();
            userWordArray = [];
            task4__userWordText = ``;
            task4__userWord.setAttribute("value", `${task4__userWordText}`);}


    }
    else {messageButtonNotPressed();}
    let elements = document.getElementsByClassName("disabled");
    clicked.checked=false;
    while(elements.length>0){
        elements[0].classList.remove("disabled");
    }

}
/*
let verifyTask4 = function () {
    userWordArray = userWordArray.join('');
    if (userWordArray == wordList[wordTurn[wordTurnIndex]].word) {
        MESSAGE.classList.add('top');
        MESSAGE.innerText = `Правильно!!!`;
        task4__userWordText = ``;
        task4__userWord.setAttribute("value", `${task4__userWordText}`);
        wordTurnIndex++;
        if (wordTurnIndex == wordList.length){
            MESSAGE.classList.add('top');
            MESSAGE.innerText = `${MESSAGE.innerText} Завдання виконано!`;
        }
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        renderLetters(wordList[wordTurn[wordTurnIndex]]);
        renderWordTask4(wordList[wordTurn[wordTurnIndex]]);
        userChoise = undefined;
        userWordArray = [];
    }
    else if (userWordArray == []){
        MESSAGE.classList.add('top');
        MESSAGE.innerText = `Введіть слово.`;
        task4__userWordText = ``;
        task4__userWord.setAttribute("value", `${task4__userWordText}`);
        userWordArray = [];
    }
    else {
        MESSAGE.classList.add('top');
        MESSAGE.innerText = `Помилка, спробуй ще раз.`;
        userChoise = undefined;
        userWordArray = [];
        task4__userWordText = ``;
        task4__userWord.setAttribute("value", `${task4__userWordText}`);
    }
    let elements = document.getElementsByClassName("disabled");
       while(elements.length>0){
        elements[0].classList.remove("disabled");
    }

}
*/
