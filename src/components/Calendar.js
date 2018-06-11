import React from 'react';
import PropTypes from 'prop-types';
import CalendarHeatmap from 'react-calendar-heatmap';
//import ReactDOM from 'react-dom';
//import FullCalendar from 'fullcalendar-reactwrapper';

class Calendar extends React.Component {

// Function to calculate how many exercises done for each date in exercisesDone, 
// put this and the date in the 'values' which is sent to the CalendarHeatmap
// Make it a list of lists containing objects, where the lists contain
// the exercise objects for each date -> count how many objects are in each list
//  -> or just save them in this structure from the starta in the state?

// tasksPerDay = () => {

//     var output = {};
//     this.props.exercisesDone.map(x => output[x.date] = (output[x.date] || 0) + 1 );

//     var result = Object.keys(output).map((key) => (
//         {
//           date: key, 
//           count: output[key]
//         }
//     ));
    
//     console.log(result);
// }

    // this.props.exercisesDone.array.forEach(function(element) {
    //     if() {

    //     }
    // }, this);
    // let newArray = [];
    // let count = 0;
    // if(this.props.exercisesDone.length !== 0) {
    //     let date = this.props.exercisesDone[0].date;
    //     console.log("Calendar date: "+ date);
    //     this.props.exercisesDone.map((exercise) => {
    //         if (exercise.date === date) {
    //             count++;
    //             console.log("count: " + count);
    //             return null;
    //         } else {
    //             const newObject = [{
    //                 date: exercise.date,
    //                 count: count
    //             }]
    //             console.log("calendar newObject: ");
    //             console.log(newObject);
    //             newObject.concat(newArray);

    //             date = exercise.date;
    //             return newObject;
    //         }
    //     });
    //}       

    // console.log("calendar newArray: ");
    // console.log(newArray);
    // return newArray;
//}


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




/*
    constructor(props) {
        super(props);
        this.state = {
        events:[
                    {
                        title: 'All Day Event',
                        start: '2017-05-01'
                    },
                    {
                        title: 'Long Event',
                        start: '2017-05-07',
                        end: '2017-05-10'
                    },
                    {
                        id: 999,
                        title: 'Repeating Event',
                        start: '2017-05-09T16:00:00'
                    },
                    {
                        id: 999,
                        title: 'Repeating Event',
                        start: '2017-05-16T16:00:00'
                    },
                    {
                        title: 'Conference',
                        start: '2017-05-11',
                        end: '2017-05-13'
                    },
                    {
                        title: 'Meeting',
                        start: '2017-05-12T10:30:00',
                        end: '2017-05-12T12:30:00'
                    },
                    {
                        title: 'Birthday Party',
                        start: '2017-05-13T07:00:00'
                    },
                    {
                        title: 'Click for Google',
                        url: 'http://google.com/',
                        start: '2017-05-28'
                    }
                ],		
        }
      }
     
      render() {
        return (
          <div id="calendar">
            <FullCalendar
            id = "calendar-id"
            header = {{
                left: 'prev,next today myCustomButton',
                center: 'title',
                right: 'month,basicWeek,basicDay'
            }}
            defaultDate={'2017-09-12'}
            navLinks= {true} // can click day/week names to navigate views
            editable= {true}
            eventLimit= {true} // allow "more" link when too many events
            events = {this.state.events}	
            />
          </div>
        );
      }*/