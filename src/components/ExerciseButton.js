import React from 'react';
import PropTypes from 'prop-types';


const ExerciseButton = (props) => {

  return (
    <button className="exercise-button"
      //bsStyle="primary" 
      onClick={props.openExercise}
      >Get a {props.name} exercise</button>
  );

}

ExerciseButton.propTypes = {
  name: PropTypes.string.isRequired,
  openExercise: PropTypes.func.isRequired
}

export default ExerciseButton;