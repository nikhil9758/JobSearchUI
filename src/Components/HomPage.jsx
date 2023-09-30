import React from 'react'
import Search from './Search'
import Filters from './Filters'
import './HomePage.css'
import DropDown from './DropDown'
import Cards from './Cards'
const HomPage = () => {
  return (
    <div className='main'>
        <div className='left__container'>
            {/* *************Left************** */}
            {/* searchfield */}
            <Search/>
            {/* filterfield */}
            <Filters/>
        </div>
        <div className='right__container'>
            {/* *************Right************** */}
            {/* dropdowncomp */}
            <DropDown/>
            {/* cardscomp */}
            <Cards/>
        </div>        
    </div>
  )
}

export default HomPage