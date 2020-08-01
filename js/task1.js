const STEP1 = document.getElementById("task1");
let container = document.getElementById("container");
let index = 0;
let cycleCounter = 0;

STEP1.onclick = function () {
    renderWord(wordList);
    showWord(wordList);


/*    const wrapObj = document.querySelector('.container');
    wrapObj.onclick=function(e){
        for(let i = 0;i<wrapObj.children.length;i++){
            wrapObj.children[i].classList.remove('active');
        }
        e.target.classList.add('active');

    }*/
}

let renderWord = function (word) {
    for (let i = 0; i < word.length; i++) {
        let task1 = document.createElement('div');
        let task1__img = document.createElement('img');
        //let task1__img__img = document.createElement('img');
        let task1__word = document.createElement('div');
        let task1__word__translation = document.createElement('div');
        let audio = document.createElement('audio');

        task1.id = word[i].id;
        task1.className = 'task1';
        task1__word.innerText = word[i].word;
        task1__word__translation.innerText = word[i].translate;
        task1__img.src = word[i].img;
        audio.src = `audio\\${i + 1}.mp3`;
        task1__img.className = 'task1__img';
        task1__word.className = 'task1__word';
        task1__word__translation.className = 'task1__word__translation';
        audio.className = `audio`;

        container.appendChild(task1);
        task1.appendChild(task1__img);
        //task1__img.appendChild(task1__img__img);
        task1.appendChild(task1__word);
        task1__word.appendChild(task1__word__translation);
        task1.appendChild(audio);
    }
}

function showWord(listOfWords) {
    wordToShow = document.getElementById(wordList[index].id);
    wordToShow.classList.add("top");
    let list = document.getElementsByClassName("task1");
    let audiolist = document.getElementsByClassName("audio");
    cycleCounter++;
    if (cycleCounter >= listOfWords.length) {
        cycleCounter = 0;
    }
    for (let item of list) {
        if (item.id == wordList[index].id) {
            let audio = document.getElementById(item.id).getElementsByTagName('audio')[0];
            audio.play();
        }
        else {
            item.classList.remove("top");
        }
    }
    index++;
    if (index >= listOfWords.length) {
        index = 0;
    }
}

let animate = setInterval(function () {
    showWord(wordList)
}, 4000);

function stop() {
    clearInterval(animate);
}
