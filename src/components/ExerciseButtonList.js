import React from 'react';
import PropTypes from 'prop-types';
import ExerciseButton from './ExerciseButton.js';

const ExerciseButtonList = (props) => {
    return (
        <div className="exercise-button-list">
            <ExerciseButton name="three-word" getExercise={props.getThreeWordsExercise}/>
            <ExerciseButton name="random" getExercise={props.getRandomExercise}/>
        </div>
    );
}

ExerciseButtonList.propTypes = {
    getThreeWordsExercise: PropTypes.func.isRequired,
    getRandomExercise: PropTypes.func.isRequired
}

export default ExerciseButtonList;
