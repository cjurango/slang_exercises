import sinon from 'sinon';

export default class NameStore {
  name : string = "";

  setName(name : string) {
    return sinon.spy(arguments);
  }
}