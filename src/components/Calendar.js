import React from 'react';
import PropTypes from 'prop-types';
import CalendarHeatmap from 'react-calendar-heatmap';

class Calendar extends React.Component {

    render() {
        console.log("Calendar props dateCount:");
        console.log(this.props.dateCount);
        return (
            <div id="calendar">
                <CalendarHeatmap
                    startDate={new Date('2018-01-01')}
                    endDate={new Date('2018-12-31')}
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


