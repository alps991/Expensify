import React from 'react';
import { connect } from 'react-redux';
import expenseTotal from '../selectors/expenseTotal';
import selectExpenses from '../selectors/expenses';

const ExpensesSummary = (props) => (
    <div>
        <h1>Viewing {props.expenses.length} expense{props.expenses.length != 1 && "s"} totalling {expenseTotal(props.expenses)}</h1>
    </div>
);

const mapStatetoProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
})

export default connect(mapStatetoProps)(ExpensesSummary);