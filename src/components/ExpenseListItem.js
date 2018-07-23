import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => (
    <Link to={'/edit/' + props.id}>
        <h3>{props.description}</h3>
        <p>{props.amount} - {props.createdAt}</p>
    </Link>
);

export default ExpenseListItem;