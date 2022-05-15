import React from 'react'

const inputForm = ({label, ...otherProps}) => {
  return (
    <div className='form-group'>
        <input className='form-input' {...otherProps}/>
    </div>
  )
}

export default inputForm