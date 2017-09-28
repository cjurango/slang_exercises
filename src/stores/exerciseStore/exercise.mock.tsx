import { ExerciseModel } from '../../models/exerciseModel';

export default class ExerciseStore {
  exercise: ExerciseModel;
  progress: number;

  nextExercise = () => {
  	this.exercise = new ExerciseModel(1, true, false, 'spelling', 'test',
      ['t','e','s','t'], ['s','e','t','t']);
  }

  submitAnswer = (answerPool: string[]) => {
    this.exercise = new ExerciseModel(1, true, false, 'spelling', 'test',
      ['t','e','s','t'], ['s','e','t','t']);
    this.exercise.accurate = false;
    this.exercise.answer_word = 'tets';
  }

  getProgress = () => {
    this.progress = 30;
  }

}