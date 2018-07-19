import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './ducks'; // imports index.js in ./ducks - don't need to specify index files imports
import './App.css';
import './styles.css';
import './react-calendar-heatmap.css';
import ExerciseButtonList from './components/ExerciseButtonList.js';
import Calendar from './components/Calendar.js';
import ExerciseModal from './components/ExerciseModal.js';
import RandomWordsList from './resources/RandomWordsList.js';
import GenreList from './resources/GenreList.js';
import TextTypeList from './resources/TextTypeList.js';

import Header from './components/Header.js'

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {

  state = {
    randomWordsList: RandomWordsList,
    genreList: GenreList,
    textTypeList: TextTypeList,
    exercisesDone: [
      {
      task: "task",
      answer: "answer",
      date: '2018-06-10'
      },
      {
      task: "task2",
      answer: "answer2",
      date: '2018-06-10'
      },
      {
      task: "task3",
      answer: "answer3",
      date: '2018-06-01'
      }
    ],
    dateCount: [],
    currentExercise: "",
    pendingExerciseText: ""
  }


  handleCloseExercise = (e) => {
    e.preventDefault();
    this.setState({ 
      showExerciseModal: false,
      pendingExerciseText: "" 
    });
  }

  handleShowExercise = (e) => {
    e.preventDefault();
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

  handleDoingExercise = (e) => {
    e.preventDefault();
    this.setState({
      pendingExerciseText: e.target.value
    });
  }

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
    this.handleCloseExercise(e);
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

  tasksPerDay = (input) => {
    var output = {};
    input.map(x => output[x.date] = (output[x.date] || 0) + 1 );
    var result = Object.keys(output).map((key) => (
        {
          date: key, 
          count: output[key]
        }
    ));

    return result;
  }

  componentDidMount = () => {
    this.setState({
      dateCount: this.tasksPerDay(this.state.exercisesDone)
    });
  }
  
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Header />
          <ExerciseModal /* show and handleClose is provided by redux */
            exercise={this.state.currentExercise}
            pendingExerciseText={this.pendingExerciseText}
            handleDoingExercise={this.handleDoingExercise}
            handleSaveExercise={this.handleSaveExercise} 
          />
          <ExerciseButtonList 
            getThreeWordsExercise={this.getThreeWordsExercise}
            getRandomExercise={this.getRandomExercise}
          />
          <Calendar 
            exercisesDone={this.state.exercisesDone}
            dateCount={this.state.dateCount}
          />
        </div>
      </Provider>
    );
  }
  
}

export default App;
