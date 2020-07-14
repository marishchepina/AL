let container = document.getElementById("container");
let wordUl = document.createElement('ul');
container.appendChild(wordUl);

let renderWord = function (word) {
    for (let i = 0; i < word.length; i++) {
        let wordLi = document.createElement('li');
        let wordLi__img = document.createElement('img');
        wordUl.appendChild(wordLi);
        wordLi.className = 'js-word';
        wordLi.innerText = word[i].word + ' ' + word[i].translate;
        wordLi.appendChild(wordLi__img);
        wordLi.id = word[i].id;
        wordLi__img.src = word[i].img;
        //setTimeout(function(){wordLi.classList.add("top");}, 500);

    }

    //setTimeout(showWord.bind(word, wordLi), 500);
}
/* var i;
 let showWord = function (listOfWords) {
 for (i = 0; i < listOfWords.length; i++) {
 setInterval(() => {
 li = document.getElementById(wordList[i].id);
 li.classList.add("top");
 let list = document.getElementsByClassName("js-word");
 for (let item of list) {
 if (item.id == wordList[i].id){
 //item.classList.add("top");
 // console.log(item.id);
 }
 else {item.classList.remove("top");}
 }

 }, 3000);
 }*/

var index = 0;
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
let animate = setInterval(function(){showWord(wordList)}, 3000);
function stop() {
    clearInterval(animate);
}


//li.classList.remove("top");
//let  elements = document.getElementsByTagName('li');
//elements.classList.remove("top");

/* let  li = document.getElementsByClassName('js-word');
 console.log(li);
 li.classList.remove("top");*/


renderWord(wordList);
showWord(wordList);