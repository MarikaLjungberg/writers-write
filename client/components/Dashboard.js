import React, { Component } from 'react';
import ExerciseButtonList from './ExerciseButtonList.js';
import Calendar from './Calendar.js';
import ExerciseModal from './ExerciseModal.js';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Dashboard extends Component {

  render() {
    return (
        <div className="dashboard">
          <ExerciseModal />
          <ExerciseButtonList />
          <Calendar />
        </div>
    );
  }
}

const mapStateToProps = state => (
  {
    state: state
  }
);

export default withRouter(connect(mapStateToProps)(Dashboard));
