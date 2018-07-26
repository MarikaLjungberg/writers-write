import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { closeExercise } from '../ducks/showExercise';
import { saveExercise } from '../ducks/handleExerciseText';

import RandomWordsList from '../resources/RandomWordsList.js';
import GenreList from '../resources/GenreList.js';
import TextTypeList from '../resources/TextTypeList.js';

class ExerciseModal extends React.Component {

  /*state = {
    pendingExerciseText: ''
  }*/

  getThreeWordsExercise = () => {
    let indeces = [];
    let i = 0;
    while (indeces.length < 3) { 
      indeces[i] = Math.floor(Math.random() * RandomWordsList.length);
      i++;
      indeces = Array.from(new Set(indeces));
    }
    const words = RandomWordsList.filter(word => indeces.includes(RandomWordsList.indexOf(word)));
    const currentExercise = `Write a story including the words ${words[0]}, ${words[1]} and ${words[2]}.`;
    return currentExercise;
  }

  getRandomExercise = () => {
    const indexGenre = Math.floor(Math.random() * GenreList.length);
    const indexTextType = Math.floor(Math.random() * TextTypeList.length);
    const currentExercise = `Write a ${GenreList[indexGenre]} ${TextTypeList[indexTextType]}.`;
    return currentExercise;
  }

  // Might not need this at all since the textare is not like a form
  /*handleDoingExercise = (e) => {
    e.preventDefault();
    this.setState({
      pendingExerciseText: e.target.value
    });
  }*/

  handleSaveExercise = (e) => {
    e.preventDefault();
    const newExerciseDone = [{
      task: this.state.currentExercise,
      answer: this.state.pendingExerciseText,
      date: this.yyyymmdd()
    }];

    this.setState({
      exercisesDone: newExerciseDone.concat(this.state.exercisesDone),
      currentExercise: "",
      pendingExerciseText: "",
      dateCount: this.tasksPerDay(newExerciseDone.concat(this.state.exercisesDone))
    });
    console.log("App execisesDone: ");
    console.log(this.state.exercisesDone);
  }


  render() {
    console.log(this.props.show, "Log show prop");
    console.log(this.props.pendingExerciseText, "Log pending exercise text");
    if (!this.props.show) {
      return null;
    }

    return <div>
        <Modal dialogClassName="exerciseModal" show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton onClick={this.props.handleClose}>
            <Modal.Title />
          </Modal.Header>
          <Modal.Body>
            <h4>{this.props.exerciseType === 'three-word' ? this.getThreeWordsExercise() : this.getRandomExercise()}</h4>

            <hr />

            <form /*onSubmit={this.props.saveExercise}*/>
              <textarea 
                className="exerciseInput"
                type="text" 
                value={this.props.pendingExerciseText}
                placeholder="Write your text here" 
                //onChange={this.handleDoingExercise()}
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
    handleClose: PropTypes.func.isRequired,
    pendingExerciseText: PropTypes.string.isRequired,
    //handleDoingExercise: PropTypes.func.isRequired, Better off handled as local state?
    handleSaveExercise: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  show: state.exerciseModal.visible,
  exerciseType: state.exerciseModal.exerciseType,
  pendingExerciseText: state.exerciseModal.pendingExerciseText
});

const mapDispatchToProps = dispatch => {
  return {
    handleClose: () => {
      dispatch(closeExercise());
    },
    handleSaveExercise: () => {
      dispatch(saveExercise());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseModal);
