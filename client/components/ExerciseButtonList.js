import React from 'react';
import PropTypes from 'prop-types';
import { showExercise } from '../ducks/showExercise';
import { connect } from 'react-redux';
import ExerciseButton from './ExerciseButton.js';
import { Grid, Row, Col } from 'react-bootstrap';

const ExerciseButtonList = (props) => {
    return (
        <Grid>
            <div className="row justify-content-center exercise-button-list">
                    <ExerciseButton className="col-xs-12 col-sm-8 col-md-4"
                        name="three-word" 
                        openExercise={props.openThreeWordExercise} />
                    <ExerciseButton className="col-xs-12 col-sm-8 col-md-4"
                        name="random" 
                        openExercise={props.openRandomExercise} />
                </div>
        </Grid>
    );
}

ExerciseButtonList.propTypes = {
    openRandomExercise: PropTypes.func.isRequired,
    openThreeWordExercise: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => {
    return {
        openRandomExercise: () => {
            dispatch(showExercise("random"));
        },
        openThreeWordExercise: () => {
            dispatch(showExercise("three-word"));
        }
    };
}

export default connect(null, mapDispatchToProps)(ExerciseButtonList);
