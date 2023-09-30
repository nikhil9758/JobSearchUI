import React from 'react'
import noteicon from '../assests/icons/document.png'
import downicon from '../assests/icons/down-arrow.png'
import './Filter.css'
const Filter = ({name,multivalue}) => {
    console.log(name)
  return (
    <div className='filter'>
        <div>
            <img src={noteicon} className='note__icon' alt='note__icon'/>
            {name}
        </div>
        <div>
            {multivalue && <img src={downicon} className='down__icon' alt='down__icon'/> }
        </div>
        {/* <img src={downicon} className='down__icon' alt='down__icon'/> */}
    </div>
  )
}

export default Filter