import { combineReducers } from 'redux';
import exerciseModal from './showExercise';
import handleExercises from './handleExercises';

export default combineReducers({
  exerciseModal: exerciseModal,
  savedExercises: handleExercises,
});
