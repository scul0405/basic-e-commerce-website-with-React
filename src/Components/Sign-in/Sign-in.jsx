import { async } from '@firebase/util'
import React, { useState } from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithUserEmailAndPassword } from '../../utilities/firebase/firebase.js'
import './Sign-in.scss'
const defaultFormFields = {
  email: '',
  password: ''
}

const SignIn = () => {
  
  const loginGoogleUser = async () => {
    const {user} = await signInWithGooglePopup()
    .catch(err => console.log(err))
    createUserDocumentFromAuth(user);
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {user} = await signInWithUserEmailAndPassword(email,password)
      console.log(user);

    } catch (error) {
      switch(error.code){
        case 'auth/user-not-found':
          alert('User not found')
          break;
        case 'auth/wrong-password':
          alert('Wrong password')
          break;
        default:
          break;
      }
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormFields({...formFields, [name] : value})
  }


  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;
  return (
    <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <input type='email' placeholder='Email' name='email' onChange={handleChange} value={email} required/>
          <input type='password' placeholder='Password' name='password' onChange={handleChange} value={password} required/>
          <div className='btn-container'>
            <button type='sumbit'>Sign in</button>
          </div>
        </form>
        <button onClick={loginGoogleUser}>Sign in with Google Account</button>
    </div>
  )
}

export default SignIn