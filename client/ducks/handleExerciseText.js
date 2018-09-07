import axios from 'axios';
import {Link} from 'react-router-dom';
var querystring = require('querystring');

// ACTION TYPES
export const SAVE_EXERCISE = 'exercise/SAVE_EXERCISE';

const initialState = {
  doneExercises: [
    {
      exerciseTask: "Write a novel.",
      exerciseText: "Once upon a time there was a novel.",
      created: '2018-06-10'
    },
    {
      exerciseTask: "Write a trilogy.",
      exerciseText: "Once upon a time there was a trilogy",
      created: '2018-06-10'
    },
    {
      exerciseTask: "Write an epic drama.",
      exerciseText: "Once upon a time there was an epic drama.",
      created: '2018-06-01'
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
  // Save to DB, then send action to reducer to update local state (should only save last updated exercise eventually)
  console.log('Inside saveExercise in action creator in duck');
  axios.post('/addExercise',
    querystring.stringify(newExerciseObject), 
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(function(response) {
      return {
        type: SAVE_EXERCISE,
        newExerciseObject: newExerciseObject
      };
  });
}
