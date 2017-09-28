import React, { Component } from 'react'
import { render } from 'react-dom';
import { observer } from 'mobx-react';
import { oneOfType, arrayOf, string, object, boolean } from 'prop-types';

export interface AnswerListProps {
  wordPool: string[];
  answerWordPool?: string[];
  sortedWordPool: string[];
  submitted?: boolean;
}

@observer
class Answer extends Component<AnswerListProps, {}> {

  static propTypes = {
    wordPool: oneOfType([arrayOf(string),object]),
    answerWordPool: oneOfType([arrayOf(string),object]),
    sortedWordPool: oneOfType([arrayOf(string),object]),
    submitted: boolean
  }

  handleAnswerLetterClick = (i, e) => {
    const { sortedWordPool, answerWordPool } = this.props;
    answerWordPool.splice(i, 1);
    sortedWordPool.push(e.target.textContent);
  }

  render() {
  	const { wordPool, answerWordPool, submitted } = this.props;
    return (
      <ul className="answer_pool">
        {
          answerWordPool.map((letter, index) =>
            <li key={index}>
              {
                submitted && (wordPool[index] !== letter) &&
                  <span className="correct_letter">{wordPool[index]}</span>
              }
              <span className="answer_letter" onClick={!submitted && this.handleAnswerLetterClick.bind(this, index)}>{letter}</span>
            </li>
          )
        }
      </ul>
    );
  }
}

export default Answer;
