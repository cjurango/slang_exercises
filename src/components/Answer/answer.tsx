import React, { Component } from 'react'
import { render } from 'react-dom';
import { observer } from 'mobx-react';
import { arrayOf, string } from 'prop-types';

export interface AnswerListProps {
  answer: string[];
}

@observer
class Answer extends Component<AnswerListProps, {}> {

  static propTypes = {
    answer: arrayOf(string)
  }

  render() {
  	const { answer } = this.props;
    return (
      <div>Your answer: {answer}</div>
    );
  }
}

export default Answer;
