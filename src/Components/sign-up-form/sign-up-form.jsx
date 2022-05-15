import React, { useState, useContext } from 'react'
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utilities/firebase/firebase'
import './sign-up-form.scss'
import { UserContext } from '../../contexts/user'
import InputForm from '../input-form/input-form'
import Button from '../button/button'

const defaultFormFields = {
    displayName : '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormField] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    const {setCurrentUser} = useContext(UserContext);
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
            setCurrentUser(user);
            resetFormFields();
        } catch(err){
            if (err.code  === 'auth/email-already-in-use')
                alert('Cannot create user, email already in use!')
        }
    }

  return (
    <div className='sign-up-form'>
        <h2>I do not have an account</h2>
        <p>Sign up with your email and password</p>
        <form onSubmit={handleSubmit}>
            <InputForm label = 'Display Name' type='text' value={displayName} name='displayName' onChange={handleChange} required />

            <InputForm label = 'Email' type='email' value={email} name='email' onChange={handleChange} required />

            <InputForm label = 'Password' type='password' value={password} name='password' onChange={handleChange} required />

            <InputForm label = 'Confirm password' type='password' value={confirmPassword} name='confirmPassword' onChange={handleChange} required />

            <Button title='Sign up' className = 'btn-black' type='submit'/>
        </form>
    </div>
  )
}

export default SignUpForm