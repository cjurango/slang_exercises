import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer } from 'mobx-react';

@observer
class Answer extends React.Component<{}, {}> {
  render() {
    return (
      <div>Test Answer</div>
    );
  }
}

export default Answer;
