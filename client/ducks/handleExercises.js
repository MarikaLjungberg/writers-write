import axios from 'axios';
import {Link} from 'react-router-dom';
var querystring = require('querystring');

// ACTION TYPES
export const SAVE_EXERCISE = 'exercise/SAVE_EXERCISE';
export const GET_EXERCISES_FROM_DB = 'exercise/GET_EXERCISES_FROM_DB';

const initialState = {
    doneExercises: []
  };


// REDUCERS
export default function handleExercises(state=initialState, action) {
  switch(action.type) {
    case SAVE_EXERCISE:
    console.log("Inside save Exercise reducer");
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
  axios.post('/addExercise',
    querystring.stringify(newExerciseObject), 
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then( () => {
      console.log("Inside save Exercise action creator");
      return {
        type: SAVE_EXERCISE,
        newExerciseObject: newExerciseObject
      };
  });
}

export const getExercisesFromDb = (fetchedExercises) => {
    return {
      type: GET_EXERCISES_FROM_DB,
      fetchedExercises: fetchedExercises,
    };
}
