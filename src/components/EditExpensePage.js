import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { removeExpense, editExpense } from '../actions/expenses';

export const EditExpensePage = (props) => (
    <div>
        <h1>Edit Expense</h1>
        <ExpenseForm
            prev={props.expense}
            onSubmit={(expense) => {
                props.editExpense(props.match.params.id, expense);
                props.history.push('/');
            }}
        />
        <button onClick={() => {
            props.dispatch(removeExpense({ id: props.match.params.id }));
            props.history.push('/');
        }}>Remove</button>
    </div>
);

const mapStatetoProps = (state, props) => ({
    expense: state.expenses.find((item) => item.id == props.match.params.id)
});

const mapDispatchtoProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: ({ id }) => dispatch(removeExpense({ id })),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(EditExpensePage);