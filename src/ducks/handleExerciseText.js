// ACTION TYPES
export const SAVE_EXERCISE = 'exercise/SAVE_EXERCISE';

const initialState = {
  doneExercises: [
    {
      id: 0,
      task: "Write a novel.",
      answer: "Once upon a time there was a novel.",
      date: '2018-06-10'
    },
    {
      id: 1,
      task: "Write a trilogy.",
      answer: "Once upon a time there was a trilogy",
      date: '2018-06-10'
    },
    {
      id: 2,
      task: "Write an epic drama.",
      answer: "Once upon a time there was an epic drama.",
      date: '2018-06-01'
    }
  ]
};

// REDUCERS
export default function handleExercise(state=initialState, action) {
  switch(action.type) {
    case SAVE_EXERCISE:
      return {
        doneExercises: [
          ...state.doneExercises, 
          action.newExerciseObject
        ]
      };
    default:
      return state;
  }

}

// ACTION CREATORS

export const saveExercise = (newExerciseObject) => {
  return {
    type: SAVE_EXERCISE,
    newExerciseObject: newExerciseObject
  };
}
