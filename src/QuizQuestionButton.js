import React, {Component} from 'react';

class QuizQuestionButton extends Component {
  render() {
    return (
      <li>
        <button> {props.button_text} </button>
      </li>
    )
  }
}

export default QuizQuestionButton;
