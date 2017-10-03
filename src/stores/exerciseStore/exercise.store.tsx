import remotedev from 'mobx-remotedev';
import request from '../../utils/request';
import { observable, computed, action } from 'mobx';

import { ExerciseModel } from '../../models/exerciseModel';

@remotedev({ global: true })
export default class ExerciseStore {

  @observable public exercise: ExerciseModel;
  @observable public progress: number;
  @observable public loading: boolean;

  constructor() {
    this.loading = false;
    this.getProgress();
  }

  @action
  nextExercise = async () => {
    try {
      this.loading = true;
      const response = await request.post('/exercises/');
      const ex = response.data;
      const sortedPool = [...ex.word.letter_pool].sort(() => Math.random() * 2 - 1);
      this.exercise = new ExerciseModel(ex.id, ex.started, ex.finished, 
        ex.category, ex.word.complete_word, ex.word.letter_pool, sortedPool);
      this.loading = false;
    } catch(error) {
      console.error(error);
    }
  }

  @action
  submitAnswer = async (answerPool: string[]) => {
    try {
      this.loading = true;
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
      this.getProgress();
      this.loading = false;
    } catch(error) {
      console.error(error);
    }
  }

  @action
  getProgress = async () => {
    try {
      const response = await request.get('/exercises/progress');
      const ex = response.data;
      this.progress = ex.progress;
    } catch(error) {
      console.error(error);
    }
  }

}