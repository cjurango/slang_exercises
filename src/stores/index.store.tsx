import ExerciseStore from './exerciseStore/exercise.store';

const exerciseStore = new ExerciseStore(); // This is our only global store

export const StoresList = { exerciseStore : exerciseStore };