import { combineReducers } from 'redux';
import showExercise from './showExercise';

export default combineReducers({
  exerciseModal: showExercise,
});
