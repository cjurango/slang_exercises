import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer, inject } from 'mobx-react';

import PronunciationSound from '../PronunciationSound/pronunciationSound';
import Answer from '../Answer/answer';

import ExerciseStore from '../../stores/exerciseStore/exercise.store'; 

@inject("exerciseStore") @observer
class Exercise extends React.Component<{ exerciseStore?: ExerciseStore }, {}> {
  render() {
    const { exerciseStore } = this.props;
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
