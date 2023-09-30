import React from 'react'
import Filter from './Filter'
import './Filters.css'
const filterList=[{"name":"Personal Information","multivalue":true},
{ "name":"Education","multivalue":true},
{"name":"Work Experience","multivalue":true},
{"name":"Activity Filter" ,"multivalue":true},
{"name":"Advanced Filter","multivalue":false}]
const Filters = () => {
  return (
    <div className='filters__main'>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <span>Filters</span>
            <span>0 Selected</span>
        </div>
        {
            filterList.map((item)=>{
                return <><hr/><Filter name={item.name} multivalue={item.multivalue}/></>
            })
        }
    </div>
  )
}

export default Filters