let homePage = document.getElementById("btn--home");
const STEP1 = document.getElementById("btn--task1");
const STEP2 = document.getElementById("btn--task2");
const STEP3 = document.getElementById("btn--task3");
const STEP4 = document.getElementById("btn--task4");
let container = document.getElementById("container");
var wordList;
let lessonButList = document.getElementById("lessonButList");
let class2 = document.getElementById("class2");
let class4 = document.getElementById("class4");
const MESSAGE = document.getElementById("message");
let taskButBlock = document.getElementById("taskButBlock");
let wordlistButBlock = document.getElementById("wordlistButBlock");
var audioFolder = "";
let index = 0;
let userChoise;
let imgsRadio = [];
let wordTurn = [];
let radioTurn = [];
let wordsRadio = [];
let wordTurnIndex = 0;
let task4__userWordText = ``;
let letters = [];
let userWordArray = [];


document.addEventListener('DOMContentLoaded', function (event) {
    MESSAGE.classList.add('top');
    MESSAGE.style.backgroundImage = "url('img/emotion/music.gif')";
    MESSAGE.style.backgroundPosition = "center 8.2rem";
    MESSAGE.style.backgroundColor = "#f0924e";
});

class2.onclick = function (){
    while (lessonButList.firstChild) {
        lessonButList.removeChild(lessonButList.firstChild);
    }
    for (key in AllWordLists2) {
        let li = document.createElement('li');
        li.innerText = `Урок ${key}`;
        lessonButList.appendChild(li);
        li.onclick = wordListUserChoise2;
    }
};

class4.onclick = function (){
    while (lessonButList.firstChild) {
        lessonButList.removeChild(lessonButList.firstChild);
    }
    for (key in AllWordLists4) {
        let li = document.createElement('li');
        li.innerText = `Урок ${key}`;
        lessonButList.appendChild(li);
        li.onclick = wordListUserChoise4;
    }
};

let wordListUserChoise2 = function (arg) {
    let UserChoiseNum;
    UserChoiseNum = parseInt((this.innerText).match(/\d+/));
    wordsRadio = [];
    imgsRadio = [];
    wordList= AllWordLists2[UserChoiseNum];
    taskButBlock.classList.remove('hide');
    wordlistButBlock.classList.add('hide');
    audioFolder = `2-l${UserChoiseNum}`;
    document.getElementById('wordlist-toggle').checked = false;
    document.getElementById('nav-toggle').checked = true;
};


let wordListUserChoise4 = function (arg) {
    let UserChoiseNum;
    UserChoiseNum = parseInt((this.innerText).match(/\d+/));
    wordsRadio = [];
    imgsRadio = [];
    wordList= AllWordLists4[UserChoiseNum];
    taskButBlock.classList.remove('hide');
    wordlistButBlock.classList.add('hide');
    audioFolder = `4-l${UserChoiseNum}`;
    document.getElementById('wordlist-toggle').checked = false;
    document.getElementById('nav-toggle').checked = true;
};

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


let turnArr = function (arr) {
    arr.length = 0;
    for (let i = 0; i < wordList.length; i++) {
        arr.push(i);
    }
    random(arr);
    return arr;
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
    stopAnimate();
    taskButBlock.classList.add('hide');
    wordlistButBlock.classList.remove('hide');
    MESSAGE.classList.add('top');
    MESSAGE.style.backgroundImage = "url('img/emotion/music.gif')";
    MESSAGE.style.backgroundSize = "cover";
    MESSAGE.style.backgroundColor = "#f0924e";
    MESSAGE.style.backgroundPosition = "center 8.2rem";
    MESSAGE.innerText = '';
};


STEP1.onclick = function () {
    hideMessage();
    renderWord(wordList);
    animate(wordList);
    document.getElementById('nav-toggle').checked = false;
}

STEP2.onclick = function () {
    stopAnimate();
    hideMessage();
    imgsForRadioButton(wordList, imgsRadio);
    turnArr(radioTurn);
    turnArr(wordTurn);
    renderWordTask2(wordList[wordTurn[wordTurnIndex]]);
    document.getElementById('nav-toggle').checked = false;
}

STEP3.onclick = function () {
    STEP3.classList.add('btn--active');
    stopAnimate();
    hideMessage();
    wordsForRadioButton(wordList, wordsRadio);
    turnArr(radioTurn);
    turnArr(wordTurn);
    console.log(wordTurn);
    renderWordTask3(wordList[wordTurn[wordTurnIndex]]);
    document.getElementById('nav-toggle').checked = false;
}

STEP4.onclick = function () {
    STEP4.classList.add('btn--active');
    stopAnimate();
    hideMessage();
    wordsForRadioButton(wordList, wordsRadio);
    turnArr(wordTurn);
    renderLetters(wordList[wordTurn[wordTurnIndex]]);
    renderWordTask4(wordList[wordTurn[wordTurnIndex]]);
    document.getElementById('nav-toggle').checked = false;
}


let cleanContainer = function () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

let hideMessage = function () {
    while (MESSAGE.firstChild) {
        MESSAGE.removeChild(MESSAGE.firstChild);
    }
    MESSAGE.classList.remove("top");
}

let messageSucces = function () {
    let audio = document.createElement('audio');
    MESSAGE.className = 'top circle';
    MESSAGE.style.backgroundImage = "url('img/emotion/glad.gif')";
    MESSAGE.style.backgroundPosition = "center top";
    MESSAGE.style.backgroundSize = "cover";
    audio.src = `audio\\MESSAGE\\tada.mp3`;
    audio.play();
    setTimeout(function () {
        MESSAGE.classList.remove("top");
    }, 4000);
}

let messageFinish = function () {
    let audio = document.createElement('audio');
    MESSAGE.className = 'top circle';
    let MESSAGE__text = document.createElement('div');
    MESSAGE.style.backgroundImage = "url('img/emotion/box.gif')";
    MESSAGE.style.backgroundPosition = "center top";
    MESSAGE.style.backgroundSize = "cover";
    MESSAGE.appendChild(MESSAGE__text);
    audio.src = `audio\\MESSAGE\\box.mp3`;
    MESSAGE.appendChild(audio);
    audio.play();

    setTimeout(function () {
        MESSAGE.style.backgroundImage = "url('img/emotion/love.gif')";
        MESSAGE.style.backgroundSize = "100%";
        MESSAGE.style.backgroundColor = "#e65a7c";
        MESSAGE.style.backgroundPosition = "center center";
        MESSAGE__text.innerText = "Завдання завершено!";
    }, 4000);
}

let messageCry = function () {
    let audio = document.createElement('audio');
    MESSAGE.className = 'top circle';
    MESSAGE.style.backgroundImage = "url('img/emotion/cry.gif')";
    MESSAGE.style.backgroundPosition = "center top";
    MESSAGE.style.backgroundSize = "100%";
    audio.src = `audio\\MESSAGE\\cry.mp3`;
    MESSAGE.appendChild(audio);
    audio.play();
    setTimeout(function () {
        MESSAGE.classList.remove("top");
    }, 4000);
}

let messageButtonNotPressed = function () {
    let audio = document.createElement('audio');
    MESSAGE.className = 'top circle';
    MESSAGE.style.backgroundImage = "url('img/emotion/lazy.gif')";
    MESSAGE.style.backgroundPosition = "center center";
    MESSAGE.style.backgroundSize = "100%";
    MESSAGE.style.backgroundColor = "#e55842";
    audio.src = `audio\\MESSAGE\\lazy.mp3`;
    MESSAGE.appendChild(audio);
    audio.play();
    setTimeout(function () {
        MESSAGE.classList.remove("top");
    }, 4000);
}