import { observable } from 'mobx';

export class ExerciseModel {

  @observable public id: number;
  @observable public started: boolean;
  @observable public finished: boolean;
  @observable public category: string;
  @observable public complete_word: string;
  @observable public letter_pool: string[];
  @observable public sorted_letter_pool: string[];
  @observable public answer_word: string;
  @observable public answer_letter_pool: string[];
  @observable public accurate: boolean;

  constructor(id: number, started: boolean, finished: boolean, category: string,
    complete_word: string, letter_pool: string[], sorted_letter_pool: string[]) {
    this.id = id;
    this.started = started;
    this.finished = finished;
    this.category = category;
    this.complete_word = complete_word;
    this.letter_pool = letter_pool;
    this.sorted_letter_pool = sorted_letter_pool;
    this.answer_letter_pool = [];
  };

}

export default ExerciseModel;
