import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = (props) => (
    <Link to={'/edit/' + props.id}>
        <h3>{props.description}</h3>
        <p>
            {numeral(props.amount / 100).format('$0,0.00')}
            -
            {moment(props.createdAt).format('MMMM D, YYYY')}
        </p>
    </Link>
);

export default ExpenseListItem;