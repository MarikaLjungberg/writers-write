// ACTION TYPES
export const SHOW_EXERCISE = 'exercise/SHOW_EXERCISE';
export const CLOSE_EXERCISE = 'exercise/CLOSE_EXERCISE';

// REDUCERS
export default function Exercise(state={visible: false, exerciseType: null, pendingExerciseText: ''}, action) {
  console.log(action);
  switch(action.type){
    case SHOW_EXERCISE:
      return {
        visible: true,
        exerciseType: action.exerciseType
      };
    case CLOSE_EXERCISE:
      return {
        visible: false,
        exerciseType: null,
        pendingExerciseText: ''
      };
    default:
      return state;
  }
}

// ACTION CREATORS  
export const showExercise = (exerciseType) => {
  return {
    type: SHOW_EXERCISE,
    exerciseType: exerciseType
  };
}

export const closeExercise = () => {
  return {
    type: CLOSE_EXERCISE
  };
}