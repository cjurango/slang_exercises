import remotedev from 'mobx-remotedev';
import request from '../../utils/request';
import { observable, computed, action } from 'mobx';

import { ExerciseModel } from '../../models/exerciseModel';

@remotedev({ global: true })
export default class ExerciseStore {

  @observable
  public exercise : ExerciseModel;

  constructor() {
    this.nextExercise = this.nextExercise.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }

  @action
  async nextExercise() {
    try {
      const response = await request.post('/exercises/');
      const ex = response.data;
      this.exercise = new ExerciseModel(ex.id, ex.started, ex.finished, 
        ex.category, ex.word.complete_word, ex.word.letter_pool,
        ex.word.letter_pool.sort(() => Math.random() * 2 - 1));
    } catch(error) {
      console.error(error);
    }
  }

  @action
  submitAnswer(answer: string): void {
    if (answer === this.exercise.complete_word) {
      this.exercise.answer_word = answer;
      this.exercise.accurate = true;
  	} else {
      this.exercise.accurate = false;
    }
  }

}