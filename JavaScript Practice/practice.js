

  let text = "Ever since I left the city, you, you, you You and me we just don't get along";


  function parseText(str) {
    let alph = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ "
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (alph.includes(str[i])) {
            newStr += str[i];
        }
    }
    return newStr.split(" ")
  }





  function generateWordPairs(str) {
    let poemArr = parseText(str);
    let pairs = {};
    for (let i = 0; i < poemArr.length - 1; i++) {
        let currentWord = poemArr[i];
        let nextWord = poemArr[i + 1]
        if (pairs[currentWord]) {
            pairs[currentWord].push(nextWord)
        } else {
            pairs[currentWord] = [nextWord];
        }
    }
    return pairs;
  }


let wordPairs = generateWordPairs(text);


function writeLine(pairs, n, words) {
    let randomWord = getRandomWord(words);
    let poem = [randomWord];

    while (poem.length < n) {

        let newWordArr = pairs[randomWord];
        randomWord = getRandomWord(newWordArr);

        if (randomWord === undefined) {
            randomWord = getRandomWord(words);
            continue;
        }
        poem.push(randomWord);

    }
    let result = poem.join(" ")
    return result;
}




function getRandomWord(arrOfWords = []) {
    let myRandom = Math.floor(Math.random() * arrOfWords.length)
    return arrOfWords[myRandom];
}


function generatePoem(text, lines) {
    let resultPeom = "";
    let pairs =  generateWordPairs(text);
    
    for (let i = 0; i < lines; i++) {
        let myLine = writeLine(pairs, lines, parseText(text))
        resultPeom += myLine + "\n"
    }
    return resultPeom;
}

console.log(generatePoem(text, 5));


var summation = function (num) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
      sum += i
    } 
    return sum
  }



