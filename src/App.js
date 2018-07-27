import React, { Component } from 'react';
import './App.css';
import './styles.css';
import './react-calendar-heatmap.css';
import { connect } from 'react-redux';
import ExerciseButtonList from './components/ExerciseButtonList.js';
import Calendar from './components/Calendar.js';
import ExerciseModal from './components/ExerciseModal.js';
import Header from './components/Header.js'

class App extends Component {
  
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

const mapStateToProps = state => (
  {
    doneExercises: state.savedExercises.doneExercises
  }
);

export default connect(mapStateToProps)(App);
