import React from 'react'
import avatar from '../assests/icons/circle.png'
import './Card.css'
const Card = ({name,location,university,hashtags,tags}) => {
  return (
    <div className='candidate__container'>
        <input type='checkbox' name="candidate"/>
        <img src={avatar} className='avatar__icon' alt='avatar__icon'/>
        <div className="candidate__details">
            <span className='candidate__name'>{name}</span>
            <span className='candidate__location'>{location}</span>
            <span>{university}</span>
            <span>{hashtags.map((hashtag)=>{
                return <span className='candidate__hashtag'>{hashtag}</span>
            })}</span>

            <span style={{marginTop: '6px'}}>{tags.map((tag)=>{
                return <span className='candidate__tag'>{tag}</span>
            })}</span>

        </div>
    </div>
  )
}

export default Card