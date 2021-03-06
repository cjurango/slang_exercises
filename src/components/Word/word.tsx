import React, { Component } from 'react'
import { render } from 'react-dom';
import { observer } from 'mobx-react';
import { oneOfType, arrayOf, string, object } from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group'

import './word.less';

export interface WordListProps {
  sortedWordPool: string[];
  answerWordPool?: string[];
}

@observer
class Word extends Component<WordListProps, {}> {

  static propTypes = {
    sortedWordPool: oneOfType([arrayOf(string),object]),
    answerWordPool: oneOfType([arrayOf(string),object])
  }

  handleWordLetterClick = (i, e) => {
    e.preventDefault();
    const { sortedWordPool, answerWordPool } = this.props;
    sortedWordPool.splice(i, 1);
    answerWordPool.push(e.target.textContent);
  }

  render() {
  	const { sortedWordPool, answerWordPool } = this.props;
    return (
      <ul className="word_pool">
        <CSSTransitionGroup
          transitionName="spelling"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={150}>
          {
            sortedWordPool.map((letter, index) =>
              <li key={index} onClick={this.handleWordLetterClick.bind(this, index)}>{letter}</li>
            )
          }
        </CSSTransitionGroup>
      </ul>
    );
  }
}

export default Word;
