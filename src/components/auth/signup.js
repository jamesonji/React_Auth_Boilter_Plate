import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import {mapStateToProps} from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
  
class Signup extends Component{
  handleFormSubmit({email, password}){
    // Need to do something to log user
    this.props.signinUser({email, password, passwordConfirm});
  }  
  

  render(){
    const { handleSubmit, pristine, reset, submitting} = this.props
    
    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="form-group">
          <label>Email:</label>
          <Field name="email" type="email" component={renderField} className="form-control"/>
        </div>
        
        <div className="form-group">
          <label>Password:</label>
          <Field name="password" type="password" component={renderField} className="form-control"/>
        </div>
        
        <div className="form-group">
          <label>Password Confirm:</label>
          <Field name="passwordConfirm" type="password" component={renderField} className="form-control"/>
        </div>
        
        <button action='submit' className="btn btn-primary">Sign up</button>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  console.log(values);
  // if (!values.username) {
  //   errors.username = 'Required'
  // } else if (values.username.length > 15) {
  //   errors.username = 'Must be 15 characters or less'
  // }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.password = 'Invalid password'
  }
  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.passwordConfirm = 'Invalid password confirmation'
  }else if(values.passwordConfirm !== values.password){
    errors.passwordConfirm = 'Password does not match'
  }
  
  // if (!values.age) {
  //   errors.age = 'Required'
  // } else if (isNaN(Number(values.age))) {
  //   errors.age = 'Must be a number'
  // } else if (Number(values.age) < 18) {
  //   errors.age = 'Sorry, you must be at least 18 years old'
  // }
  return errors
}

const SignupContainer = connect(mapStateToProps, actions)(Signup);

export default reduxForm({
  form: "signup", // name of the form
  fields: ['email', 'password', 'passwordConfirm'],
  validate
})(SignupContainer);
