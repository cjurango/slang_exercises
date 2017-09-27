import * as React from 'react';
import * as ReactDOM from 'react-dom';

import PronunciationSound from '../PronunciationSound/pronunciationSound';
import Answer from '../Answer/answer';

class Exercise extends React.Component<{}, {}> {
  render() {
    return (
    	<div>
    	  <PronunciationSound></PronunciationSound>
    	  <p>Some stuffs here...</p>
        <Answer></Answer>
      </div>
    );
  }
}

export default Exercise;
