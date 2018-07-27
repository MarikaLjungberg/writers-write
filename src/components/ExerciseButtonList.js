import React from 'react';
import PropTypes from 'prop-types';
import { showExercise } from '../ducks/showExercise';
import { connect } from 'react-redux';
import ExerciseButton from './ExerciseButton.js';
import { Grid, Row, Col } from 'react-bootstrap';

const ExerciseButtonList = (props) => {
    return (
        <Grid>
            <Row className="exercise-button-list">
                <Col xs={12} sm={8} md={4} mdOffset={3}>
                    <ExerciseButton 
                        name="three-word" 
                        openExercise={props.openThreeWordExercise} />
                </Col>
                <Col xsHidden md={2}> </Col>
                <Col xs={12} sm={8} md={4} mdOffset={3}>
                    <ExerciseButton 
                        name="random" 
                        openExercise={props.openRandomExercise} />
                </Col>
            </Row>
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
