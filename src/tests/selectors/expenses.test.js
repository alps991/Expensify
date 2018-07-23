import selectExpenses from '../../selectors/expenses';
import { expenses } from '../fixtures/expenses';

test('should filter by text', () => {
    const filtered = selectExpenses(expenses, { text: 'a', sortBy: '', startDate: '', endDate: '' });
    expect(filtered).toEqual([{
        id: '3',
        description: 'asd',
        amount: '54',
        note: '',
        createdAt: '5432'
    }]);
});

test('should filter by startDate', () => {
    const filtered = selectExpenses(expenses, { text: '', sortBy: '', startDate: '3', endDate: '' });
    expect(filtered).toEqual([{
        id: '2',
        description: 'z',
        amount: '4.4',
        note: '',
        createdAt: '4'
    }, {
        id: '3',
        description: 'asd',
        amount: '54',
        note: '',
        createdAt: '5432'
    }]);
});

test('should filter by end date', () => {
    const filtered = selectExpenses(expenses, { text: '', sortBy: '', startDate: '', endDate: '3' });
    expect(filtered).toEqual([{
        id: '1',
        description: 'f',
        amount: '5',
        note: '',
        createdAt: '0'
    }]);
});

test('should sort by amount', () => {
    const filtered = selectExpenses(expenses, { text: '', sortBy: 'amount', startDate: '', endDate: '' });
    expect(filtered).toEqual([{
        id: '3',
        description: 'asd',
        amount: '54',
        note: '',
        createdAt: '5432'
    }, {
        id: '1',
        description: 'f',
        amount: '5',
        note: '',
        createdAt: '0'
    }, {
        id: '2',
        description: 'z',
        amount: '4.4',
        note: '',
        createdAt: '4'
    }]);
});

test('should sort by date', () => {
    const filtered = selectExpenses(expenses, { text: '', sortBy: 'date', startDate: '', endDate: '' });
    expect(filtered).toEqual([{
        id: '3',
        description: 'asd',
        amount: '54',
        note: '',
        createdAt: '5432'
    }, {
        id: '2',
        description: 'z',
        amount: '4.4',
        note: '',
        createdAt: '4'
    }, {
        id: '1',
        description: 'f',
        amount: '5',
        note: '',
        createdAt: '0'
    },]);
});