import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
    state = {
        focusedInput: null
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.setTextFilter(e.target.value);
                    }}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value == 'date') {
                            this.props.sortByDate();
                        } else if (e.target.value == 'amount') {
                            this.props.sortByAmount();
                        }
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId="your_unique_start_date_id"
                    endDate={this.props.filters.endDate}
                    endDateId="your_unique_end_date_id"
                    onDatesChange={({ startDate, endDate }) => {
                        this.props.setStartDate(startDate);
                        this.props.setEndDate(endDate);
                    }}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                    isOutsideRange={() => false}
                    numberOfMonths={1}
                    showClearDates={true}
                />
            </div>
        );
    }
}

const mapStatetoProps = (state) => ({
    filters: state.filters
});

const mapDispatchtoProps = (dispatch) => ({
    setTextFilter: (text) => dispatch.setTextFilter(text),
    sortByDate: () => dispatch.sortByDate(),
    sortByAmount: () => dispatch.sortByAmount(),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),

});

export default connect(mapStatetoProps, mapDispatchtoProps)(ExpenseListFilters);