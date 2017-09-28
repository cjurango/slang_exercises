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
    nextExercise: func.isRequired,
    submitAnswer: func.isRequired
  }

  handleClickNextExerciseButton = (e) => {
    const { nextExercise } = this.props;
    this.setState({ submitted: false });
    nextExercise();
  }

  handleClickSubmitButton = (e) => {
    const { exercise, submitAnswer } = this.props;
    if (!this.state.submitted &&
      (exercise.letter_pool.length === exercise.answer_letter_pool.length)) {
      this.setState({ submitted: true });
      submitAnswer(exercise.answer_letter_pool);
    }
  }

  handleLetterClick = (i, e) => {
    e.preventDefault();
    const { exercise } = this.props;
    exercise.sorted_letter_pool.splice(i, 1);
    exercise.answer_letter_pool.push(e.target.textContent);
  }

  render() {
    const { exercise } = this.props;
    const feedback = (() => {
      if (this.state.submitted) {
        if (exercise.accurate) {
          return <p>Correct Answer!</p>;
        } else {
          return <p>Incorrect Answer!</p>;
        }
      }
    })();
    return (
      <div>
        <PronunciationSound word={exercise.complete_word}></PronunciationSound>
        {feedback}
        <ul className="pool">
          {
            exercise.sorted_letter_pool.map((letter, index) =>
              <li key={index} onClick={this.handleLetterClick.bind(this, index)}>{letter}</li>
            )
          }
        </ul>
        <Answer wordPool={exercise.letter_pool}
                answerWordPool={exercise.answer_letter_pool}
                sortedWordPool={exercise.sorted_letter_pool}
                submitted={this.state.submitted}></Answer>
        <button className="submit-exercise"
                onClick={this.handleClickSubmitButton}>Submit Exercise</button>
        <button className="next-exercise"
                onClick={this.handleClickNextExerciseButton}>Next Exercise</button>
      </div>
    );
  }
}

export default Exercise;
