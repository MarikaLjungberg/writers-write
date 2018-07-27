import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CalendarHeatmap from 'react-calendar-heatmap';
import {Popover} from 'react-bootstrap';


class Calendar extends React.Component {

    state = {
        dateCount: [], // can be calculated from exercisesDone --> should be inside calendar/heatmap?
    }

    componentDidMount = () => {
        this.setState({
          dateCount: this.tasksPerDay(this.props.doneExercises)
        });
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

    onClickOnSquare = (value) => {
        const exercisesThatDay = this.props.doneExercises.filter(entry => entry.date === value.date);
        let text = ``;
        exercisesThatDay.forEach(function(element) {
            text = text + `The task: ${element.task} \n Your text: ${element.answer}\n`
        }, this);
        alert(text);
    }

    render() {
        return null;
       /* console.log("Calendar props dateCount:");
        console.log(this.state.dateCount);

        const msInHalfAYear = 1000*60*60*24*365*0.5;

        return (
            <div id="calendar">
                <CalendarHeatmap
                    startDate={Date.now() - msInHalfAYear}
                    endDate={Date.now() + msInHalfAYear}
                    values={this.props.dateCount}
                    onClick={(value) => this.onClickOnSquare(value)}
                    classForValue={(value) => {
                        if (!value) {
                        return 'color-empty';
                        }
                        return `color-scale-${value.count}`;
                    }}
                />
            </div>
        );*/
    }
}

Calendar.propTypes = {
    doneExercises: PropTypes.array.isRequired
}

const mapStateToProps = state => (
    {
      doneExercises: state.savedExercises.doneExercises
    }
  );
  
  export default connect(mapStateToProps)(Calendar);


