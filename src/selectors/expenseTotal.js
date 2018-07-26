import numeral from 'numeral';

export default (expenses) => {
    let sum = 0;
    expenses.forEach((expense) => sum += expense.amount);
    return numeral(sum / 100).format('$0,0.00');
}