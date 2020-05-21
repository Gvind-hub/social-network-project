import React from 'react';
import Login from "./Login";
import {connect} from "react-redux";

class LoginContainer extends React.Component{
    render() {
        return <Login {... this.props}/>
    }
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps)(LoginContainer);
