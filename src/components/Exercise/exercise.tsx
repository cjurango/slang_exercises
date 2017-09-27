import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer } from 'mobx-react';

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
class Exercise extends React.Component<ExerciseListProps, ExerciseState> {

  constructor(props?: ExerciseListProps, context?: any) {
    super(props, context);
    this.state = { answer: []};
    this.handleClickSubmitButton = this.handleClickSubmitButton.bind(this);
    this.handleClickNextExerciseButton = this.handleClickNextExerciseButton.bind(this);
    this.handleLetterClick = this.handleLetterClick.bind(this);
  }

  handleClickNextExerciseButton(e: React.SyntheticEvent<any>) {
    this.props.nextExercise();
  }

  handleClickSubmitButton(e: React.SyntheticEvent<any>) {
  	this.props.submitAnswer(this.state.answer.join(''));
  }

  handleLetterClick(e) {
    let tempAnswer: string[] = this.state.answer;
    tempAnswer.push(e.target.textContent);
    this.setState({ answer: tempAnswer });
  }

  render() {
    const { exercise, nextExercise, submitAnswer} = this.props;
    return (
      <div>
        <PronunciationSound></PronunciationSound>
        <ul className="pool">
          {exercise.sorted_letter_pool.map((letter, index) =>
            <li key={index} onClick={ this.handleLetterClick }>{letter}</li>
          )}
        </ul>
        <Answer answer = { this.state.answer }></Answer>
        <button className="submit-exercise"
                onClick={ this.handleClickSubmitButton }>Submit Exercise</button>
        <button className="next-exercise"
                onClick={ this.handleClickNextExerciseButton }>Next Exercise</button>
      </div>
    );
  }
}

export default Exercise;
