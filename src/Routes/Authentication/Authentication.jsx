import React from 'react'
import './Authentication.scss'
import SignIn from '../../Components/Sign-in/Sign-in'
import SignUpForm from '../../Components/sign-up-form/sign-up-form'

const Authentication = () => {
  return (
    <div className='authentication-container'>
        <SignIn />
        <SignUpForm />
    </div>
  )
}

export default Authentication