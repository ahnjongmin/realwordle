class WordleManager{
    constructor() {
        this.answer = 'apple'
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