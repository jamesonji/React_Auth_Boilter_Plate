import axios from 'axios';
const ROOT_URL = 'http://localhost:3000';

export function signinUser({email, password}){
  return function(dispatch){
    //Submit email/password to server
    axios.post(`${ROOT_URL}/signin`, {email, password})
  }
  
  // if request is good..
  // - update state to indicated user is authenticated
  // - save the JWT token
  // - redirect user to other pages like '/feature'
  
  
  // if request is bad..
  //- show an error to the user
}