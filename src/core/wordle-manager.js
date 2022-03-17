import WORDLIST from "../stuff/word-list"

const getRandomNumber = (num) => {
    return Math.floor(Math.random() * num)
}

class WordleManager{
    constructor() {
        const length = WORDLIST.WORD5.length;
        this.answer = WORDLIST.WORD5[getRandomNumber(length)];
    }

    checkResult(inputString) {
        // [none, other, correct, none, correct]
        
        const answerChars = this.answer.split(''); // ['a', ...]
        console.log(answerChars)
        const inputChars = inputString.split(''); // []

        return inputChars.map((char, idx) => {
            if (char === answerChars[idx]) return 'correct';
            else if(answerChars.includes(char)) return 'other';
            else return 'none';
        })
    }
}

export default WordleManager