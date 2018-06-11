import React from 'react';
import PropTypes from 'prop-types';
import CalendarHeatmap from 'react-calendar-heatmap';
import {Popover} from 'react-bootstrap';

class Calendar extends React.Component {

    onClickOnSquare = (value) => {
        const exercisesThatDay = this.props.exercisesDone.filter(entry => entry.date === value.date);
        let text = ``;
        exercisesThatDay.forEach(function(element) {
            text = text + `The task: ${element.task} \n Your text: ${element.answer}\n`
        }, this);
        alert(text);
    }

    render() {
        console.log("Calendar props dateCount:");
        console.log(this.props.dateCount);

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
        );
    }
}

Calendar.propTypes = {
    exercisesDone: PropTypes.array.isRequired,
    dateCount: PropTypes.array.isRequired
}

export default Calendar;


