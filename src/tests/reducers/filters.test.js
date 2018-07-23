import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set default filters', () => {
    const state = filtersReducer(undefined, { type: '@@init' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sort by to date', () => {
    const prevState = { text: '', sortBy: 'amount', startDate: moment().startOf('month'), endDate: moment().endOf('month') }
    const state = filtersReducer(prevState, { type: 'SORT_BY_DATE' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', filter: 'asdf' });
    expect(state).toEqual({
        text: 'asdf',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set start date', () => {
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', date: 234 });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: 234,
        endDate: moment().endOf('month')
    });
});

test('should set end date', () => {
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', date: 234 });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: 234
    });
});