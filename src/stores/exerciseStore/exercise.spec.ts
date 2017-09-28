import test from 'ava';
import nock from 'nock';

import ExerciseStore from './exercise.store';
import { ExerciseModel } from '../../models/exerciseModel';

let testParams = null;

function getTestParameters() {
  return {
    apliUrl: 'http://127.0.0.1:3000/api/v1',
    postExerciseReply: {
      id: 222,
      started: false,
      finished: false,
      category: 'spelling',
      word: {
        id: 231,
        complete_word: 'take',
        letter_pool: ['t','a','k','e']
      },
      answer: null
    },
    putExerciseReply: {
      id: 222,
      started: false,
      finished: true,
      category: 'spelling',
      word: {
        id: 231,
        complete_word: 'take',
        letter_pool: ['t','a','k','e']
      },
      answer: {
        answer_word: 'taek',
        accurate: false
      }
    },
    getExerciseProgressReply: {
      progress: 43
    }
  }
}

function getProgress() {
  nock(testParams.apliUrl)
    .get('/exercises/progress')
    .reply(200, testParams.getExerciseProgressReply);
}

test.beforeEach(() => {
  testParams = getTestParameters();
  getProgress();
});

test('it should get the next exercise', async (t) => {
  const exerciseStore = new ExerciseStore();
  nock(testParams.apliUrl)
    .post('/exercises/')
    .reply(200, testParams.postExerciseReply);
  await exerciseStore.nextExercise();
  t.deepEqual(exerciseStore.exercise.id, 222);
  t.deepEqual(exerciseStore.exercise.complete_word, 'take');
});

test('it should submit the answer of the exercise', async (t) => {
  const exerciseStore = new ExerciseStore();
  exerciseStore.exercise = new ExerciseModel(1, true, false, 'spelling', 'test',
    ['t','e','s','t'], ['s','e','t','t']);
  nock(testParams.apliUrl)
    .put('/exercises/'+exerciseStore.exercise.id)
    .reply(200, testParams.putExerciseReply);
  await exerciseStore.submitAnswer(['t','a','e','k']);
  t.deepEqual(exerciseStore.exercise.answer_word, 'taek');
  getProgress();
});

test('it should get the overall progress', async (t) => {
  const exerciseStore = new ExerciseStore();
  nock(testParams.apliUrl)
    .get('/exercises/progress')
    .reply(200, testParams.getExerciseProgressReply);
  await exerciseStore.getProgress();
  t.deepEqual(exerciseStore.progress, 43);
});