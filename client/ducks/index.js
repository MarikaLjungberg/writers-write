import { combineReducers } from 'redux';
import showExercise from './showExercise';
import saveExercise from './handleExerciseText';

export default combineReducers({
  exerciseModal: showExercise,
  savedExercises: saveExercise
});
