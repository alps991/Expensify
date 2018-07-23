import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.prev ? props.prev.description : '',
            amount: props.prev ? props.prev.amount / 100 + '' : '',
            note: props.prev ? props.prev.note : '',
            createdAt: props.prev ? moment(props.prev.createdAt) : moment(),
            calenderFocused: false
        };
    }

    handleAmountChange = (e) => {
        const amount = e.target.value;
        const reg = /^\d+(\.\d{0,2})?$/
        if (!amount || amount.match(reg)) {
            this.setState(() => ({ amount }));
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.description && this.state.amount) {
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount) * 100,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            });
            this.setState(() => ({
                description: '',
                amount: '',
                note: '',
                createdAt: moment(),
                calenderFocused: false,
                error: ''
            }));
        } else {
            this.setState(() => ({ error: 'Enter a description and amount' }));
        }
    }

    render() {
        return (
            <div>
                {this.state.error}
                <form
                    onSubmit={this.handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={(e) => {
                            const description = e.target.value;
                            this.setState(() => ({ description }))
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.handleAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={(date) => {
                            if (date) {
                                this.setState(() => ({ createdAt: date }));
                            }
                        }}
                        focused={this.state.calenderFocused}
                        onFocusChange={({ focused }) => this.setState(() => ({ calenderFocused: focused }))}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={(e) => {
                            const note = e.target.value;
                            this.setState(() => ({ note }))
                        }}
                    ></textarea>
                    <button type="submit">{this.props.prev ? 'Edit Expense' : 'Add Expense'}</button>
                </form>
            </div>
        );
    }
}