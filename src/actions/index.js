import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './types';
const ROOT_URL = 'http://localhost:3000'; // server location

export function signinUser({email, password}){
  return function(dispatch){
    //Submit email/password to server
    axios.post(`${ROOT_URL}/signin`, {email, password})
      .then(response => {
        console.log(response);
        // if request is good..
        // - update state to indicated user is authenticated
        dispatch({type: AUTH_USER})
        
        // - save the JWT token to localstorage
        localStorage.setItem('token', response.data.token)
        
        // - redirect user to other pages like '/feature'
        browserHistory.push('/feature');
      })
      .catch(()=>{
        // if request is bad..
        //- show an error to the user
        
      })
    
    
  }
}