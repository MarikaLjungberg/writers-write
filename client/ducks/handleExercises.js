import axios from 'axios';
import {Link} from 'react-router-dom';
var querystring = require('querystring');

// ACTION TYPES
export const SAVE_EXERCISE = 'exercise/SAVE_EXERCISE';
export const GET_EXERCISES_FROM_DB = 'exercise/GET_EXERCISES_FROM_DB';

const initialState = 
  {
    doneExercises: [
      {
        _id: 1,
        exerciseTask: "Write a novel.",
        exerciseText: "Once upon a time there was a novel.",
        created: '2018-06-10'
      },
      {
        _id: 2,
        exerciseTask: "Write a trilogy.",
        exerciseText: "Once upon a time there was a trilogy",
        created: '2018-06-10'
      },
      {
        _id: 3,
        exerciseTask: "Write an epic drama.",
        exerciseText: "Once upon a time there was an epic drama.",
        created: '2018-06-01'
      }
    ]
  };


// REDUCERS
export default function handleExercises(state=initialState, action) {
  switch(action.type) {
    case SAVE_EXERCISE:
      return {
        doneExercises: [
          ...state.doneExercises, 
          action.newExerciseObject
        ]
      };
    case GET_EXERCISES_FROM_DB:
      return {
        doneExercises: [
          ...state.doneExercises, 
          ...action.fetchedExercises
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

export const getExercisesFromDb = (fetchedExercises) => {
  console.log('Inside getExercisesFromDb in action creator in duck. FetchedExercises:');
  console.log(fetchedExercises);
    return {
      type: GET_EXERCISES_FROM_DB,
      fetchedExercises: fetchedExercises,
    };
}
