import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = (props) => (
    <button onClick={props.startLogin}>Login</button>
);

const mapDispatchtoProps = (dispatch) => ({
    startLogin: dispatch(startLogin)
})

export default connect(undefined, mapDispatchtoProps)(LoginPage);