import remotedev from 'mobx-remotedev';
import { observable, computed, action } from 'mobx';

import { ExerciseModel } from '../../models/exerciseModel';

@remotedev({ global: true })
export default class ExerciseStore {

  @observable 
  public exercise : ExerciseModel;

  constructor() {
    this.nextExercise = this.nextExercise.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.nextExercise();
  }

  @action
  nextExercise(): void {
  	console.log('Adding a exercise...');
    this.exercise = new ExerciseModel(1, true, false, 'spelling', 'test', ['t', 'e', 's', 't'], null, null);
  }

  @action
  submitAnswer(answer_word: string): void {
  	if (answer_word && answer_word === this.exercise.complete_word) {
      this.exercise.accurate = true;
  	}
  }

}