const STEP1 = document.getElementById("task1");
let container = document.getElementById("container");
let wordUl = document.createElement('ul');
container.appendChild(wordUl);
let index = 0;

let renderWord = function (word) {
    for (let i = 0; i < word.length; i++) {
        let wordLi = document.createElement('li');
        let wordLi__img = document.createElement('img');
        let audio = document.createElement('audio');

        wordLi.id = word[i].id;
        wordLi.className = 'js-word';
        wordLi.innerText = word[i].word + ' ' + word[i].translate;
        wordLi__img.src = word[i].img;
        audio.src = `audio\\${i + 1}.mp3`;
        audio.className = `audio`;

        wordUl.appendChild(wordLi);
        wordLi.appendChild(wordLi__img);
        wordLi.appendChild(audio);
    }
}
let i=0;

    function showWord(listOfWords) {
        li = document.getElementById(wordList[index].id);
        li.classList.add("top");
        let list = document.getElementsByClassName("js-word");
        let audiolist = document.getElementsByClassName("audio");
        i++;
        if (i >= listOfWords.length) {
            i = 0;
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
    }, 3000);

    function stop() {
        clearInterval(animate);
    }



STEP1.onclick = function () {
    renderWord(wordList);
    showWord(wordList);
}