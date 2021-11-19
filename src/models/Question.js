export class Question {
  /**
   *
   * @param {string} text this is te text of the question
   * @param {string[]} choices options to choose
   * @param {string} answer correct answer
   */
  constructor(text, choices, answer) {
    this.text = text
    this.choices = choices
    this.answer = answer
  }

  /**
   *
   * @param {string} choice text given to evaluate quesion
   * @returns {boolean} true if choice is correct
   */

  correctAnswer(choice) {
    if (choice === this.answer) {
      return true
    } else {
      return false
    }
  }
}
