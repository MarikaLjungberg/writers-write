import React from 'react';
import PropTypes from 'prop-types';
import CalendarHeatmap from 'react-calendar-heatmap';

class Calendar extends React.Component {

    render() {
        console.log("Calendar props dateCount:");
        console.log(this.props.dateCount);

        const msInHalfYear = 1000*60*60*24*365*0.5;
        console.log(msInHalfYear);

        return (
            <div id="calendar">
                <CalendarHeatmap
                    startDate={Date.now() - msInHalfYear}
                    endDate={Date.now() + msInHalfYear}
                    values={this.props.dateCount}
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


