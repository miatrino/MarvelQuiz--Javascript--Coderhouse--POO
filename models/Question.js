export class Question{
    /**
     *
     * @param {string} text this is the text of the question
     * @param {string[]} choices this is the choices of the question
     * @param {string} answer this is the answer of the question
     */
    constructor(text,choices,answer){
        this.text = text;
        this.choices=choices;
        this.answer=answer;
    }
    /**
     * 
     * @param {string} choice text to validete is correct
     * @returns {boolean} true if the choice is correct
     */
    correctAnswer(choice){
        return choice===this.answer;
    }
}

