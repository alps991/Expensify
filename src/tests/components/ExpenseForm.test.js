import React from 'react';
import { shallow } from 'enzyme';
import { expenses } from '../fixtures/expenses';
import ExpenseForm from '../../components/ExpenseForm';
import moment from 'moment';

test('should render empty expense form', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render filled expense form', () => {
    const wrapper = shallow(<ExpenseForm prev={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', { preventDefault: () => { } });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on change', () => {
    const value = "New description";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', { target: { value } });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on change', () => {
    const value = "New note";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', { target: { value } });
    expect(wrapper.state('note')).toBe(value);
});

test('should accept change to amount', () => {
    const value = "123.21";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', { target: { value } });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not accept change to amount', () => {
    const value = "123.213";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', { target: { value } });
    expect(wrapper.state('amount')).toBe("");
});


test('should call onsubmit prop for valid form submition', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm prev={expenses[1]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', { preventDefault: () => { } });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: 'z',
        amount: 4.4,
        note: '',
        createdAt: 986097600000
    })
});

test('should set a new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calender focus on change', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused: true });
    expect(wrapper.state('calenderFocused')).toEqual(true);
});