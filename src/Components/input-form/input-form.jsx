import React from 'react'
import './input-form.scss'

const inputForm = ({label, ...otherProps}) => {
  return (
    <div className='form-group'>
        <input className='form-input' {...otherProps}/>
        <label>{label}</label>
    </div>
  )
}

export default inputForm