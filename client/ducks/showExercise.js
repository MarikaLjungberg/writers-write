// ACTION TYPES
export const SHOW_EXERCISE = 'exercise/SHOW_EXERCISE';
export const CLOSE_EXERCISE = 'exercise/CLOSE_EXERCISE';

const initialState = {
  visible: false, 
  exerciseType: null,
  nextExerciseId: 2
};

// REDUCERS
export default function exerciseModal(state=initialState, action) {
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
        nextExerciseId: action.exerciseId + 1
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

export const closeExercise = (exerciseId) => {
  return {
    type: CLOSE_EXERCISE,
    exerciseId: exerciseId
  };
}