import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../Utils/Validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return <form onSubmit={handleSubmit}>
        {createField('email', 'email', [required], Input)}
        {createField('password', 'password', [required], Input, {type: 'password'})}
        {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}
        {/*<div>*/}
        {/*    <Field placeholder={'email'} name={'email'} validate={[required]} component={Input}/>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*    <Field placeholder={'password'} name={'password'} type={'password'} validate={[required]} component={Input}/>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*    <Field component={Input} name={'rememberMe'} type={'checkbox'}/>*/}
        {/*    <span>remember me</span>*/}
        {/*</div>*/}

        {captchaUrl && <img src={captchaUrl}/>}
        {captchaUrl && createField('Symbols from image', 'captcha',
            [required], Input)}
        { error && <div className={style.formSummaryError}>{error}</div> }

        <div>
            <button>login</button>
        </div>
    </form>
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});


export default connect(mapStateToProps, {login})(Login);
