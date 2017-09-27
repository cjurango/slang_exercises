import test from 'ava'

import ExerciseStore from './exercise.store'

test('it should edit name', async (t) => {
  const exerciseStore = new ExerciseStore()
  exerciseStore.setName("test")
  t.is(exerciseStore.name, "test");
})