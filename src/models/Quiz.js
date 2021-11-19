//@ts-check
import { Question } from './Question.js'

export class Quiz {
  questionIndex = 0
  score = 0

  /**
   *
   * @param {Question[]} questions
   */

  constructor(questions) {
    this.questions = questions
  }

  /**
   *
   * @returns {Question} question found
   */
  getCurrentQuestion() {
    return this.questions[this.questionIndex]
  }

  /**
   *
   * @param {string} answer chosen option
   */

  guess(answer) {
    if (this.getCurrentQuestion().correctAnswer(answer)) {
      this.score++
    }
    console.log(answer)
    this.questionIndex++
  }

  isEnded() {
    return this.questions.length === this.questionIndex
  }
}
