import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startRemoveExpense, startEditExpense } from '../actions/expenses';

export const EditExpensePage = (props) => (
    <div>
        <h1>Edit Expense</h1>
        <ExpenseForm
            prev={props.expense}
            onSubmit={(expense) => {
                props.startEditExpense(props.match.params.id, expense);
                props.history.push('/');
            }}
        />
        <button onClick={() => {
            props.startRemoveExpense({ id: props.match.params.id });
            props.history.push('/');
        }}>Remove</button>
    </div>
);

const mapStatetoProps = (state, props) => ({
    expense: state.expenses.find((item) => item.id == props.match.params.id)
});

const mapDispatchtoProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: ({ id }) => dispatch(startRemoveExpense({ id })),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(EditExpensePage);