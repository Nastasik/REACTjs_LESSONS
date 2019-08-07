import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { extendMoment } from 'moment-range';
import './css/main.css';
import 'moment/locale/ru';

export default function Calendar(props) {
    const { date } = props;
    moment().locale("ru");       

let start = moment(date).startOf('month'),
    end = moment(date).endOf('month');

start = new Date(start.day() !== 1 ? start.subtract(start.day() - 1, 'day') : start);
end = new Date(end.day() !== 7 ? end.add(7 - end.day(), 'day') : end);

let dates = Array.from(extendMoment(moment).range(start, end).by('day'));
const weeks = dates.reduce((acc) => [...acc, dates.splice(0, 7)],[]);

console.log(start, end, 'start, end');
console.log(Array.from(extendMoment(moment).range(start, end).by('day')), 'range');
console.log(weeks, 'weeks');

    return (
        <div className="ui-datepicker">
        <div className="ui-datepicker-material-header">
          <div className="ui-datepicker-material-day">{ moment(date).format('dddd') }</div>
          <div className="ui-datepicker-material-date">
            <div className="ui-datepicker-material-day-num">{ date.getDate() }</div>
            <div className="ui-datepicker-material-month">{ moment(date).format('D MMMM') }</div>
            <div className="ui-datepicker-material-year">{ date.getFullYear() }</div>
          </div>
        </div>
        <div className="ui-datepicker-header">
          <div className="ui-datepicker-title">
            <span className="ui-datepicker-month">{ moment(date).format('MMMM') }</span>&nbsp;<span className="ui-datepicker-year">{ date.getFullYear() }</span>
          </div>
        </div>
        <table className="ui-datepicker-calendar">
          <colgroup>
            <col/>
            <col/>
            <col/>
            <col/>
            <col/>
            <col className="ui-datepicker-week-end"/>
            <col className="ui-datepicker-week-end"/>
          </colgroup>
          <thead>            
            <tr>
              <th scope="col" title="Понедельник">Пн</th>
              <th scope="col" title="Вторник">Вт</th>
              <th scope="col" title="Среда">Ср</th>
              <th scope="col" title="Четверг">Чт</th>
              <th scope="col" title="Пятница">Пт</th>
              <th scope="col" title="Суббота">Сб</th>
              <th scope="col" title="Воскресенье">Вс</th>
            </tr>
          </thead>
            <tbody>{weeks.map((week, i) => (<tr key = {i}>{week.map((day, props)  =>   (<td key = {props} className = {date.getMonth() !== new Date(day).getMonth() ? "ui-datepicker-other-month" : (date.getTime() === new Date(day).getTime() ? "ui-datepicker-today" : 'false')}>{new Date(day).getDate()}</td>))}</tr>))}
          </tbody>
        </table>
      </div>
    )
}
Calendar.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
}

