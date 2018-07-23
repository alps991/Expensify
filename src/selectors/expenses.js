import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const textMatch = text.length == 0 || expense.description.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = startDate ? createdAtMoment.isSameOrAfter(startDate, 'day') : true;
        const endDateMatch = endDate ? createdAtMoment.isSameOrBefore(endDate, 'day') : true;

        return textMatch && startDateMatch && endDateMatch;
    }).sort((a, b) => {
        if (sortBy === 'amount') {
            return b.amount - a.amount;
        } else if (sortBy === 'date') {
            return b.createdAt - a.createdAt;
        }

    });
}