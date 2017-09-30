import React, { Component } from 'react'
import { render } from 'react-dom';
import { observer } from 'mobx-react';
import { oneOfType, arrayOf, string, object, boolean } from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group'

import './answer.less';

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
    e.preventDefault();
    const { sortedWordPool, answerWordPool } = this.props;
    answerWordPool.splice(i, 1);
    sortedWordPool.push(e.target.textContent);
  }

  render() {
  	const { wordPool, answerWordPool, submitted } = this.props;
    return (
      <ul className="answer_pool">
        <CSSTransitionGroup
          transitionName="spelling"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={150}>
          {
            answerWordPool.map((letter, index) =>
              <li key={index} onClick={!submitted && this.handleAnswerLetterClick.bind(this, index)}>
                {
                  submitted && (wordPool[index] !== letter) &&
                    <span className="correct_letter">{wordPool[index]}</span>
                }
                <span>{letter}</span>
              </li>
           )
          }
        </CSSTransitionGroup>
      </ul>
    );
  }
}

export default Answer;
