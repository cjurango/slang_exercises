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
      const sortedPool = [...ex.word.letter_pool].sort(() => Math.random() * 2 - 1);
      this.exercise = new ExerciseModel(ex.id, ex.started, ex.finished, 
        ex.category, ex.word.complete_word, ex.word.letter_pool, sortedPool);
    } catch(error) {
      console.error(error);
    }
  }

  @action
  async submitAnswer(answerPool: string[]) {
    try {
      const answer = answerPool.join('');
      this.exercise.accurate = answer === this.exercise.letter_pool.join('');
      this.exercise.answer_word = answer;
      const answerBody = {
        finished: true,
        answer: {
          answer_word: this.exercise.answer_word,
          accurate: this.exercise.accurate
        }
      }
      await request.put('/exercises/' + this.exercise.id, answerBody);
    } catch(error) {
      console.error(error);
    }
  }

}