import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import {mapStateToProps} from 'redux';
import { connect } from 'react-redux'
import * as actions from '../../actions';


class Signin extends Component{
  handleFormSubmit({email, password}){
    // Need to do something to log user
    this.props.signinUser({email, password});
  }
  
  
  render(){
    const { handleSubmit, pristine, reset, submitting } = this.props
    
    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="form-group">
          <label>Email:</label>
          <Field name="email" type="email" component="input" className="form-control"/>
        </div>
        
        <div className="form-group">
          <label>Password:</label>
          <Field name="password" type="password" component="input" className="form-control"/>
        </div>
        <button action='submit' className="btn btn-primary">Sign in</button>
      </form>
    )
  }
}

const SigninForm = reduxForm({
  form: "signin", // name of the form
  fields: ['email', 'password']
})(Signin);

export default Signin = connect(mapStateToProps, actions)(SigninForm);

