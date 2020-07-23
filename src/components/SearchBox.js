import React from 'react';

export default ({ inputChange }) => {
    return (
        <div className='input'>
            <input placeholder='Search Products ...' onChange={inputChange} type="text" className='input__text'/>
        </div>
    )
}