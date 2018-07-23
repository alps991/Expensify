import expensesReducer from '../../reducers/expenses';
import { expenses } from '../fixtures/expenses';

test('should set up default expenses', () => {
    const state = expensesReducer(undefined, { type: '@@init' });
    expect(state).toEqual([]);
});

test('should add expense', () => {
    const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense: { id: '123', description: 'a', amount: 1 } });
    expect(state).toEqual([...expenses, { id: '123', description: 'a', amount: 1, }]);
});

test('should remove expense by id', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: 1 });
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should edit expense', () => {
    const state = expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: expenses[0].id, updates: { description: 'a', amount: "1" } });
    expect(state).toEqual([{ id: '1', description: 'a', amount: '1', note: '', createdAt: '0' }, expenses[1], expenses[2]]);
});

test('shouldnt edit expense', () => {
    const state = expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: 'rwea', updates: { description: 'a', amount: "1" } });
    expect(state).toEqual(expenses);
});