import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/styles.css';
import './styles/react-calendar-heatmap.css';
import { connect } from 'react-redux';
import ExerciseButtonList from './components/ExerciseButtonList.js';
import Calendar from './components/Calendar.js';
import ExerciseModal from './components/ExerciseModal.js';
import Header from './components/Header.js';
import { getExercisesFromDb } from './ducks/handleExercises.js';
import axios from 'axios';

class App extends Component {

  componentDidMount() {
    console.log("App did mount props:");
    console.log(this.props);
    axios.get('/getAllExercises')
    .then(response => {
      this.props.getExercisesFromDb(response.data);
    });
  }

  
  render() {
    return (
        <div className="app">
          <Header />
          <ExerciseModal />
          <ExerciseButtonList />
          <Calendar />
        </div>
    );
  }
  
}

App.propTypes = {
  getExercisesFromDb: PropTypes.func.isRequired
}

const mapStateToProps = state => (
  {
    state: state
  }
);

const mapDispatchToProps = dispatch => {
  return {
    getExercisesFromDb: (fetchedExercises) => { dispatch(getExercisesFromDb(fetchedExercises)); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
