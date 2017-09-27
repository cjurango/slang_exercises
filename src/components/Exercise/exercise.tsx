import React, { Component } from 'react'
import { render } from 'react-dom';
import { observer } from 'mobx-react';
import { object, func } from 'prop-types';

import PronunciationSound from '../PronunciationSound/pronunciationSound';
import Answer from '../Answer/answer';
import { ExerciseModel } from '../../models/exerciseModel';

export interface ExerciseListProps { 
  exercise: ExerciseModel; 
  nextExercise: () => any;
  submitAnswer: (answer: string) => any;
}

export interface ExerciseState {
  answer: string[];
}

@observer
class Exercise extends Component<ExerciseListProps, ExerciseState> {

  constructor() {
    super();
    this.state = { answer: []};
  }

  static propTypes = {
    exercise: object.isRequired,
    nextExercise: func.isRequired,
    submitAnswer: func.isRequired
  }

  handleClickNextExerciseButton = (e) => {
    const { nextExercise } = this.props;
    nextExercise();
  }

  handleClickSubmitButton = (e) => {
  	const { submitAnswer } = this.props;
    submitAnswer(this.state.answer.join(''));
  }

  handleLetterClick = (e) => {
    e.preventDefault();
    let tempAnswer: string[] = this.state.answer;
    tempAnswer.push(e.target.textContent);
    this.setState({ answer: tempAnswer });
  }

  render() {
    const { exercise } = this.props;
    return (
      <div>
        <PronunciationSound></PronunciationSound>
        <ul className="pool">
          {exercise.sorted_letter_pool.map((letter, index) =>
            <li key={index} onClick={this.handleLetterClick}>{letter}</li>
          )}
        </ul>
        <Answer answer={this.state.answer}></Answer>
        <button className="submit-exercise"
                onClick={this.handleClickSubmitButton}>Submit Exercise</button>
        <button className="next-exercise"
                onClick={this.handleClickNextExerciseButton}>Next Exercise</button>
      </div>
    );
  }
}

export default Exercise;
