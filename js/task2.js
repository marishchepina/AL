const STEP2 = document.getElementById("task2");
let container = document.getElementById("container");


let renderWord = function (word) {
    if (container.children.length > 0) {}
    else {
        for (let i = 0; i < word.length; i++) {
            let img = document.createElement('img');
            let audio = document.createElement('audio');


            img.src = word[i].img;
            audio.src = `audio\\${i + 1}.mp3`;
            audio.className = `audio`;

            container.appendChild(img);
            container.appendChild(audio);
        }
    }

}

let renderLetters = function (word) {
    for (let i = 0; i > word.length; i++) {
        let letters = word[i].word;
        letters = letters.split('');


        function shuffle(arr) {
            var j, temp;
            for (var i = arr.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
            return arr;
        }
        console.log(letters);
        console.log(shuffle(letters));

    }
}


STEP2.onclick = function () {
    renderWord(wordList);
    renderLetters(wordList);

}