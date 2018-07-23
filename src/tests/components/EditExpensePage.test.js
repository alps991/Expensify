import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import { expenses } from '../fixtures/expenses';

test('should render edit expense page', () => {
    const editExpense = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<EditExpensePage editExpense={editExpense} history={history} />);
    expect(wrapper).toMatchSnapshot();
});

// test('should handle onSubmit', () => {
//     const editExpense = jest.fn();
//     const history = { push: jest.fn() };
//     const wrapper = shallow(<EditExpensePage editExpense={editExpense} history={history} expense={expenses[1]} />);
//     wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
//     expect(history.push).toHaveBeenLastCalledWith('/');
//     expect(editExpense).toHaveBeenLastCalledWith(expenses[1]);
// });

// test('should handle remove expense', () => {
//     const removeExpense = jest.fn();
//     const history = { push: jest.fn() };
//     const wrapper = shallow(<EditExpensePage removeExpense={removeExpense} history={history} expense={expenses[1]} />);
//     wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
//     expect(history.push).toHaveBeenLastCalledWith('/');
//     expect(editExpense).toHaveBeenLastCalledWith(expenses[1]);
// });