import React, { useState } from 'react'
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utilities/firebase/firebase'
import './sign-up-form.scss'
const defaultFormFields = {
    displayName : '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormField] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormField({...formFields, [name]: value})
    }

    const resetFormFields = () => {
        setFormField(defaultFormFields);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword){
            alert('Password does not match !!!')
            return;
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocumentFromAuth(user,{displayName});
            resetFormFields();
        } catch(err){
            if (err.code  === 'auth/email-already-in-use')
                alert('Cannot create user, email already in use!')
        }
    }

  return (
    <div className='sign-up-form'>
        <h1>Sign up with your email and password</h1>
        <form onSubmit={handleSubmit}>
            <label>Display name</label>
            <input type='text' value={displayName} name='displayName' onChange={handleChange} required/>

            <label>Email</label>
            <input type='email' value={email} name='email' onChange={handleChange} required/>

            <label>Password</label>
            <input type='password' value={password} name='password' onChange={handleChange} required/>

            <label>Confirm password</label>
            <input type='password' value={confirmPassword} name='confirmPassword' onChange={handleChange} required/>

            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUpForm