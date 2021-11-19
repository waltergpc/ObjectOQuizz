import { newQuestions } from './data/Questions.js'
import { Quiz } from './models/Quiz.js'
import { UI } from './models/UI.js'

/**
 *
 * @param {Quiz} quiz main quiz object
 * @param {UI} ui user interface object
 */

const renderQuestion = (quiz, ui) => {
  if (quiz.isEnded()) {
    ui.showScores(quiz.score)
  } else {
    ui.showQuestion(quiz.getCurrentQuestion().text)
    ui.showChoices(quiz.getCurrentQuestion().choices, (choice) => {
      quiz.guess(choice)
      renderQuestion(quiz, ui)
    })
    ui.showProgress(quiz.questionIndex + 1, quiz.questions.length)
  }
}

function main() {
  const quiz = new Quiz(newQuestions)
  const ui = new UI()

  renderQuestion(quiz, ui)
}

main()
