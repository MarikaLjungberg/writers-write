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
  constructor(props) {
    super(props);
    this.state.currentExercise = this.generateExercise(props.exerciseType);
  }

  state = {
    pendingExerciseText: '',
    currentExercise: ''
  }

  componentDidUpdate(prevProps) {
    if(prevProps.show === false && this.props.show === true) {
      this.setState({
        currentExercise: this.generateExercise(this.props.exerciseType),
        pendingExerciseText: ''
      });
    }
  }

// GENERATE EXERCISES-------------------------------------------------------------------------------------------------------------------------

  generateExercise = (exerciseType) => {
    return exerciseType === 'three-word' ? this.getThreeWordsExercise() : this.getRandomExercise();
  }

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

// HANDLE EVENTS -------------------------------------------------------------------------------------------------------------------------

  handleTextInput = (e) => {
    this.setState({
      pendingExerciseText: e.target.value
    });
  }

  handleSaveClick = (e) => {
    e.preventDefault();
    const newExerciseDone = {
      id: this.props.nextId,
      task: this.state.currentExercise,
      answer: this.state.pendingExerciseText,
      date: this.yyyymmdd()
    };

    console.log('new exercise id ', newExerciseDone.id);

    this.props.handleSaveExercise(newExerciseDone);
  }

  yyyymmdd = () => {
    var now = new Date();
    var y = now.getFullYear();
    var m = now.getMonth() + 1;
    var d = now.getDate();
    var mm = m < 10 ? '0' + m : m;
    var dd = d < 10 ? '0' + d : d;
    return `${y}-${mm}-${dd}`;
}

// RENDER -------------------------------------------------------------------------------------------------------------------------

  render() {
    if (!this.props.show) {
      return null;
    }

    return <div>
        <Modal dialogClassName="exerciseModal" show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton onClick={this.props.handleClose}>
            <Modal.Title />
          </Modal.Header>
          <Modal.Body>
            <h4>{this.state.currentExercise}</h4>

            <hr />

            <form onSubmit={this.handleSaveClick}>
              <textarea 
                className="exerciseInput"
                type="text" 
                value={this.state.pendingExerciseText}
                placeholder="Write your text here" 
                onChange={this.handleTextInput}
                />
              {/* <Button type="submit" name="submit" value="submit">
                Save
              </Button> */}
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleSaveClick}>Save</Button> 
            {/*<Button onClick={this.props.handleClose}>Close</Button>*/ 
            /* if user saves exercise several times (without closing modal), we should check if exercise with that id already exists and if so,
            replace the old version of the exercise with the new current version */ } 
          </Modal.Footer>
        </Modal>
      </div>;
  }
}

// PROPS & REDUX -------------------------------------------------------------------------------------------------------------------------

ExerciseModal.propTypes = {
    show: PropTypes.bool.isRequired,
    exerciseType: PropTypes.string,
    handleClose: PropTypes.func.isRequired,
    handleSaveExercise: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    show: state.exerciseModal.visible,
    exerciseType: state.exerciseModal.exerciseType,
    nextId: state.exerciseModal.nextExerciseId
});

const mapDispatchToProps = dispatch => {
  return {
    handleClose: (exerciseId) => { dispatch(closeExercise(exerciseId)); }, // The state here is the invocation of the dispatch of the closeExercise action
    handleSaveExercise: (newExerciseDone) => { dispatch(saveExercise(newExerciseDone)); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseModal);
