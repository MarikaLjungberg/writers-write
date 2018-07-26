// ACTION TYPES
//export const HANDLE_DOING_EXERCISE = 'exercise/HANDLE_DOING_EXERCISE';
export const SAVE_EXERCISE = 'exercise/SAVE_EXERCISE';

// REDUCERS


// ACTION CREATORS
/*export const handleDoingExercise = (pendingTextEvent) => {
  return {
    type: HANDLE_DOING_EXERCISE,
    pendingExerciseText: pendingTextEvent.target.value
  };
}*/

export const saveExercise = () => {
  return {
    type: SAVE_EXERCISE,
    text: 'test'
  };
}
