import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer } from 'mobx-react';

export interface AnswerListProps {
  answer: string[];
}

@observer
class Answer extends React.Component<AnswerListProps, {}> {
  render() {
  	const { answer } = this.props;
    return (
      <div>Your answer: {answer}</div>
    );
  }
}

export default Answer;
