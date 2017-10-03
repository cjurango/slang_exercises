import React, { Component } from 'react'
import { render } from 'react-dom';
import { observer } from 'mobx-react';
import { object, func, boolean } from 'prop-types';
import Spinner from 'react-spinkit';

import PronunciationSound from '../PronunciationSound/pronunciationSound';
import Feedback from '../Feedback/feedback';
import Word from '../Word/word';
import Answer from '../Answer/answer';
import { ExerciseModel } from '../../models/exerciseModel';
import './exercise.less';

export interface ExerciseListProps { 
  exercise: ExerciseModel;
  loading: boolean;
  nextExercise: () => any;
  submitAnswer: (answer: string[]) => any;
}

export interface ExerciseState {
  submitted?: boolean;
}

@observer
class Exercise extends Component<ExerciseListProps, ExerciseState> {

  constructor() {
    super();
    this.state = { submitted: false };
  }

  static propTypes = {
    exercise: object.isRequired,
    loading: boolean,
    nextExercise: func.isRequired,
    submitAnswer: func.isRequired
  }

  handleClickNextExerciseButton = (e) => {
    this.setState({ submitted: false });
    const { nextExercise } = this.props;
    nextExercise();
  }

  canSubmit = () => {
    const { exercise } = this.props;
    if (!this.state.submitted &&
      (exercise.letter_pool.length === exercise.answer_letter_pool.length)) {
      return true;
    }
    return false;
  }

  handleClickSubmitButton = (e) => {
    const { exercise, submitAnswer } = this.props;
    if (this.canSubmit()) {
      this.setState({ submitted: true });
      submitAnswer(exercise.answer_letter_pool);
    }
  }

  render() {
    const { exercise, loading } = this.props;
    const canSubmitClass = 'submit-exercise ' + (this.canSubmit() ? 'allowed' : 'not-allowed')
    const loadingOrSound = (() => {
      if (loading) {
        return <Spinner name='ball-scale-ripple-multiple' fadeIn="0" color="steelblue"/>
      } else {
        return <PronunciationSound word={exercise.complete_word}></PronunciationSound>;
      }
    })();
    return (
      <div className="exercise">
        <span className="fixed">{loadingOrSound}</span>
        <Feedback accurate={exercise.accurate} submitted={this.state.submitted}></Feedback>
        <Word sortedWordPool={exercise.sorted_letter_pool}
        answerWordPool={exercise.answer_letter_pool}></Word>
        <Answer wordPool={exercise.letter_pool}
                answerWordPool={exercise.answer_letter_pool}
                sortedWordPool={exercise.sorted_letter_pool}
                submitted={this.state.submitted}></Answer>
        <button className={canSubmitClass}
                onClick={this.handleClickSubmitButton}>Submit Exercise</button>
        <button className="next-exercise"
                onClick={this.handleClickNextExerciseButton}>Next Exercise</button>
      </div>
    );
  }
}

export default Exercise;
