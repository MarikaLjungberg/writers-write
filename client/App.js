import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/styles.css';
import './styles/react-calendar-heatmap.css';
import { connect } from 'react-redux';
import Header from './components/Header.js';
import Dashboard from './components/Dashboard.js';
import CustomizeExercises from './components/CustomizeExercises.js';
import Agenda from './components/Agenda.js';
import Groups from './components/Groups.js';
import Inspo from './components/Inspo.js';
import { getExercisesFromDb } from './ducks/handleExercises.js';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    axios.get('/getAllExercises')
    .then(response => {
      this.props.getExercisesFromDb(response.data);
    });
  }

  
  render() {
    return (
        <div className="app">
          <Header />
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/customizeExercises' component={CustomizeExercises}/>
            <Route path='/agenda' component={Agenda}/>
            <Route path='/groups' component={Groups}/>
            <Route path='/inspo' component={Inspo}/>
          </Switch>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
