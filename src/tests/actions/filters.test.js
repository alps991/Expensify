import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../../actions/filters";
import moment from 'moment'

test('should set the filter to text', () => {
    const action = setTextFilter('asdf');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        filter: 'asdf'
    });
});

test('should set the filter to default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        filter: ''
    });
});

test('should set the start date', () => {
    const mom = moment();
    const action = setStartDate(mom);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: mom
    })
})

test('should set the end date', () => {
    const mom = moment();
    const action = setEndDate(mom);
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: mom
    })
})

test('should sort by amount', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should sort by date', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});