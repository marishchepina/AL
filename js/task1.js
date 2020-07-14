const STEP1 = document.getElementById("task1");

let container = document.getElementById("container");
let wordUl = document.createElement('ul');
container.appendChild(wordUl);
var index = 0;

let renderWord = function (word) {
    for (let i = 0; i < word.length; i++) {
        let wordLi = document.createElement('li');
        let wordLi__img = document.createElement('img');
        var audio = new Audio();
        audio.src = 'audio/6.mp3';
        audio.play();
        wordUl.appendChild(wordLi);
        wordLi.appendChild(audio);
        audio.setAttribute("muted", "muted");
        wordLi.className = 'js-word';
        wordLi.innerText = word[i].word + ' ' + word[i].translate;
        wordLi.appendChild(wordLi__img);
        wordLi.appendChild(audio);
        wordLi.id = word[i].id;
        wordLi__img.src = word[i].img;


    }

    function showWord(listOfWords) {
        li = document.getElementById(wordList[index].id);
        li.classList.add("top");
        let list = document.getElementsByClassName("js-word");
        for (let item of list) {
            if (item.id == wordList[index].id) {
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
    }, 1000);

    function stop() {
        clearInterval(animate);
    }


}



STEP1.onclick = function(){
    renderWord(wordList);
    showWord(wordList);
  }