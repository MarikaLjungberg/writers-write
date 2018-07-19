import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { closeExercise } from '../ducks/showExercise';

class ExerciseModal extends React.Component {

  render() {
    console.log(this.props.show, "Show show prop")
    if (!this.props.show) {
      return null;
    }

    return <div>
        <Modal dialogClassName="exerciseModal" show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton onClick={this.props.handleClose}>
            <Modal.Title />
          </Modal.Header>
          <Modal.Body>
            <h4>{this.props.exercise}</h4>

            <hr />

            <form /*onSubmit={this.props.saveExercise}*/>
              <textarea 
                className="exerciseInput"
                type="text" 
                value={this.props.pendingExerciseText}
                placeholder="Write your text here" 
                onChange={this.props.handleDoingExercise}
                />
              {/* <Button type="submit" name="submit" value="submit">
                Save
              </Button> */}
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.handleSaveExercise}>Save</Button> 
            {/*<Button onClick={this.props.handleClose}>Close</Button>*/}
          </Modal.Footer>
        </Modal>
      </div>;
  }
}


ExerciseModal.propTypes = {
    show: PropTypes.bool.isRequired,
    exerciseType: PropTypes.string,
    exercise: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired,
    pendingExerciseText: PropTypes.string.isRequired,
    handleDoingExercise: PropTypes.func.isRequired,
    handleSaveExercise: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  show: state.exerciseModal.visible,
  exerciseType: state.exerciseModal.exerciseType
});

const mapDispatchToProps = dispatch => {
  return {
    handleClose: () => {
      dispatch(closeExercise());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseModal);
