import React from 'react';
import PropTypes from 'prop-types';
import { showExercise } from '../ducks/showExercise';
import { connect } from 'react-redux';
import ExerciseButton from './ExerciseButton.js';

const ExerciseButtonList = (props) => {
    return (
        <div className="exercise-button-list">
            <ExerciseButton 
                name="three-word" 
                openExercise={props.openThreeWordExercise} />
            <ExerciseButton 
                name="random" 
                openExercise={props.openRandomExercise} />
        </div>
    );
}

ExerciseButtonList.propTypes = {
    openRandomExercise: PropTypes.func.isRequired,
    openThreeWordExercise: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => {
    return {
        openRandomExercise: () => {
            console.log("open is called");
            dispatch(showExercise("random"));
        },
        openThreeWordExercise: () => {
            console.log("open is called");
            dispatch(showExercise("three-word"));
        }
    };
}

export default connect(null, mapDispatchToProps)(ExerciseButtonList);
