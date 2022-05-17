import { async } from '@firebase/util'
import React, { useState, useContext } from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithUserEmailAndPassword } from '../../utilities/firebase/firebase.js'
import './Sign-in.scss'
import { UserContext } from '../../contexts/user.jsx'
import InputForm from '../input-form/input-form.jsx'
import Button from '../button/button.jsx'

const defaultFormFields = {
  email: '',
  password: ''
}

const SignIn = () => {
  const {setCurrentUser} = useContext(UserContext);

  const loginGoogleUser = async () => {
    const {user} = await signInWithGooglePopup()
    .catch(err => console.log(err))
    createUserDocumentFromAuth(user);
    setCurrentUser(user);
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {user} = await signInWithUserEmailAndPassword(email,password)
      setCurrentUser(user);
      resetFormFields();

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
        <div className='input-container'>
          <InputForm label='Email' type='email' name='email' onChange={handleChange} value={email} required />
          <InputForm label='Password' type='password' name='password' onChange={handleChange} value={password} required/>
        </div>
        <div className='button-container'>
          <Button className='btn-black' type='submit' onClick={handleSubmit} title='Sign in'/>
          <Button className='btn-blue' onClick={loginGoogleUser} title='Sign in with Google' />
        </div>
    </div>
  )
}

export default SignIn