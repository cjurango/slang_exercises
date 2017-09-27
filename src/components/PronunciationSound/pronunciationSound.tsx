import React, { Component } from 'react'
import { render } from 'react-dom';
import { observer } from 'mobx-react';

@observer
class PronunciationSound extends Component<{}, {}> {
  render() {
    return (
      <div>Test PronunciationSound</div>
    );
  }
}

export default PronunciationSound;
