export class UI {
  constructor() {}

  /**
   *
   * @param {string} text question to render
   */

  showQuestion(text) {
    const questionTitle = document.getElementById('question')
    questionTitle.innerText = text
  }

  /**
   *
   * @param {string[]} choices choices from the question object
   */

  showChoices(choices, callback) {
    const choiceContainer = document.getElementById('choices')
    choiceContainer.innerHTML = ''
    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement('button')
      button.className = 'qbutton'
      button.innerText = choices[i]
      button.addEventListener('click', () => callback(choices[i]))
      choiceContainer.append(button)
    }
  }

  /**
   *
   * @param {number} score
   */
  showScores(score) {
    const quizEndHtml = document.getElementById('quiz')
    quizEndHtml.innerHTML = `
    <h3>Result</h3>
    <h3> Your Score: ${score} </h3>`
  }

  /**
   *
   * @param {number} currenIndex current question index
   * @param {number} total total number of questions
   */

  showProgress(currenIndex, total) {
    const element = document.getElementById('progress')
    element.innerHTML = `Question ${currenIndex} of ${total}`
  }
}
