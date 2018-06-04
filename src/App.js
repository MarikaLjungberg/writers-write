import React, { Component } from 'react';
import './App.css';
import './styles.css';
//import {Grid, Jumbotron} from 'react-bootstrap';
//import SearchForm from './components/SearchForm.js';
//import SearchResults from './components/SearchResults.js';
//import ExerciseButton from './components/ExerciseButton.js';
import ExerciseButtonList from './components/ExerciseButtonList.js';
import Calendar from './components/Calendar.js';
import ExerciseModal from './components/ExerciseModal.js';
import RandomWordsList from './resources/RandomWordsList.js';
import GenreList from './resources/GenreList.js';
import TextTypeList from './resources/TextTypeList.js';

import Header from './components/Header.js'

class App extends Component {

  state = {
    randomWordsList: RandomWordsList,
    genreList: GenreList,
    textTypeList: TextTypeList,
    exercisesDone: [],
    showExerciseModal: false,
    currentExercise: ""
  }

  /* Calculate from length of list of done exercises instead?
  updateCount = () => {
    this.setState((prevState) => ({
      exerciseCount: prevState.exerciseCount + 1
    }));
  }
  */ 

  handleCloseExercise = (e) => {
    e.preventDefault();
    this.setState({ showExerciseModal: false });
  }

  handleShowExercise = (e) => {
    this.setState({ showExerciseModal: true });
  }

  getThreeWordsExercise = (e) => {
    e.preventDefault();
    let indeces = [];
    let i = 0;
    while (indeces.length < 3) { // for (let i = 0; i < 3; i++)
      indeces[i] = Math.floor(Math.random() * RandomWordsList.length);
      i++;
      indeces = Array.from(new Set(indeces));
    }
    const words = RandomWordsList.filter(word => indeces.includes(RandomWordsList.indexOf(word)));
    this.setState({
      currentExercise: `Write a story including the words ${words[0]}, ${words[1]} and ${words[2]}.`,
      showExerciseModal: true
    });
    console.log("Three word");
    console.log(this.state);
  }

  getRandomExercise = (e) => {
    e.preventDefault();
    const indexGenre = Math.floor(Math.random() * GenreList.length);
    const indexTextType = Math.floor(Math.random() * TextTypeList.length);
    this.setState({
      currentExercise: `Write a ${GenreList[indexGenre]} ${TextTypeList[indexTextType]}.`,
      showExerciseModal: true
    });
    console.log("Random");
    console.log(this.state);
  }
  
  render() {
    return (
      <div className="app">
        <Header />
        <ExerciseModal 
          show={this.state.showExerciseModal}
          exercise={this.state.currentExercise}
          handleClose={this.handleCloseExercise}/>
        <ExerciseButtonList 
          getThreeWordsExercise={this.getThreeWordsExercise}
          getRandomExercise={this.getRandomExercise}
          handleShowExercise={this.handleShowExercise}
          handleCloseExercise={this.handleCloseExercise}
        />
        <Calendar />
      </div>
    );
  }
  

  /*
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>{this.state.exerciseType} Writing Exercises!</h1>
            <p>This is an app to help you get writing!</p>
            <div onClick={this.updateCount}><ExerciseButton exerciseType={this.state.exerciseType}/></div>
            <p>So far you have done {this.state.exerciseCount} exercises. Good work!</p>

            <SearchForm />
          </Grid>
        </Jumbotron>;

        <SearchResults />
      </div>
    );
  }
  */
}

export default App;
