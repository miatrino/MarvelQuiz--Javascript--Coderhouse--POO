export class UI{
    constructor(){}

    /**
     *
     * @param {string} text
     */
    showQuestion(text){
     const questionTitle =  document.getElementById('question');
     questionTitle.innerHTML = text;
    }

    /**
     *
     * @param {string[]} choices
     */
    showChoice(choices,callback) {
       const choicesContainer = document.getElementById('choices');
       choicesContainer.innerHTML =' ';
        for (let i = 0; i < choices.length; i++){
           const button = document.createElement('button');
           button.innerText=choices[i];
           button.className='button';
           button.addEventListener('click',() =>callback(choices[i]));
           choicesContainer.append(button);
        }
       }

    /**
     * 
     * @param {number} score the total score
     */
    showScores(score){
        const quizEndHtml = `
        <h1>Resultados</h1>
        <h2>Tu puntaje: ${score}</h2>
        `
        const element = document.getElementById('quiz')
        element.innerHTML = quizEndHtml
    }

/**
 * 
 * @param {number} currentIndex the current index of tha quiz
 * @param {number} total the total questions of the quiz
 */    
showProgress(currentIndex,total) {
   const element = document.getElementById('progress');
   element.innerHTML = `Question ${currentIndex} of ${total}`
}

}