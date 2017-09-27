import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer } from 'mobx-react';

@observer
class PronunciationSound extends React.Component<{}, {}> {
  render() {
    return (
      <div>Test PronunciationSound</div>
    );
  }
}

export default PronunciationSound;
