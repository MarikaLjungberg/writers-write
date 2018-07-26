import { combineReducers } from 'redux';
import showExercise from './showExercise';
//import closeExercise from './showExercise';
//import saveExercise from './handleExerciseText';

export default combineReducers({
  exerciseModal: showExercise,
  //exerciseModal: closeExercise,
  //exerciseModal: saveExercise
});
