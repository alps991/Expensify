import { addExpense, removeExpense, editExpense } from "../../actions/expenses";


test('should remove an expense from state', () => {
    const action = removeExpense({ id: 'asdf' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'asdf'
    })
});

test('should edit an expense', () => {
    const action = editExpense('asdf', { description: 'asgggg' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'asdf',
        updates: {
            description: 'asgggg'
        }
    })
})

test('should add an expense', () => {
    const action = addExpense({ description: 'asdf', amount: '1234', createdAt: 13, note: 'asd' });
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: 'asdf',
            amount: '1234',
            note: 'asd',
            createdAt: 13
        }
    })
})

test('should add an expense with nothing', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})