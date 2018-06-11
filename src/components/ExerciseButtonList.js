import React from 'react';
import PropTypes from 'prop-types';
import ExerciseButton from './ExerciseButton.js';

const ExerciseButtonList = (props) => {
    return (
        <div className="exercise-button-list">
            <ExerciseButton 
                name="three-word" 
                getExercise={props.getThreeWordsExercise}
                showExerciseModal={props.showExerciseModal}/>
            <ExerciseButton 
                name="random" 
                getExercise={props.getRandomExercise}
                showExerciseModal={props.showExerciseModal}/>
        </div>
    );
}

ExerciseButtonList.propTypes = {
    getThreeWordsExercise: PropTypes.func.isRequired,
    getRandomExercise: PropTypes.func.isRequired,
    handleShowExercise: PropTypes.func.isRequired,
    handleCloseExercise: PropTypes.func.isRequired,
}

export default ExerciseButtonList;
