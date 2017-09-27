import sinon from 'sinon';

export default class ExerciseStore {
  name : string = "";

  setName(name : string) {
    return sinon.spy(arguments);
  }
}