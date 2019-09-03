import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';

function DateConverter(Component) {
    return class extends React.Component {
        state = {
            date: ``,
        };        

        count(date) {
            const days = moment().diff(moment(date), 'd');
            const hours = moment().diff(moment(date), 'H');
            const minutes = moment().diff(moment(date), 'minutes');

            let result;

            if (days > 1) {
                result = `${days} дней назад`;
            } else if (hours > 1) {
                result = `${hours} часов назад`;
            } else if (hours < 1) {
                result = `${minutes} минут назад`;
            }

            this.setState({date: result});
        }

        componentDidMount() {
            this.count(this.props.date);
        }

        render() {
            return <Component {...this.props} date={this.state.date} />;
        }
    };
}

export default DateConverter;