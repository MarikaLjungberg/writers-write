import React from 'react';
import PropTypes from 'prop-types';
//import {Button} from 'react-bootstrap';


const ExerciseButton = (props) => {
/*
  componentDidMount() {
    // Set up other fields that are not part of the data flow (props or state)
    // Set up exercise database connection / save db here?
  }
    
  componentWillUnmount() {
    // Clear other fields that are not part of the data flow (props or state)
    // Tear down DB connection here?
  }

  getRandomExercise = () => {
    prompt("Write a story about a flower.");
  }
*/

  return (
    <button className="exercise-button"
      bsStyle="primary" 
      onClick={props.getExercise}
      >Get a {props.name} exercise</button>
  );

}

ExerciseButton.propTypes = {
  name: PropTypes.string.isRequired,
  getExercise: PropTypes.func.isRequired
}

export default ExerciseButton;