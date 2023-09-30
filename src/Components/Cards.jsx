import React from 'react'
import Card from './Card'
import './Cards.css'
const candidatesList=[
    {
        "name":"Aalliyah Sanderson",
        "location":"Riyadh, Saudi Arabia",
        "university":"Bachelor- Cambridge University(2023- 2023)",
        hashtags:["#top_candidates","#top_candidates"],
        tags:["New York","Marketing","London"]
    },
    {
        "name":"John Doe",
        "location":"Boston, USA",
        "university":"Bachelor- MIT(2023- 2023)",
        hashtags:["#top_candidates","#top_candidates"],
        tags:["New York","Marketing","London"]
    },
    {
        "name":"Thomas Matt",
        "location":"Edinburgh, UK",
        "university":"Bachelor- Harvard University(2023- 2023)",
        hashtags:["#top_candidates","#top_candidates"],
        tags:["New York","Marketing","London"]
    },
    {
        "name":"Kamilia Smith",
        "location":"London,UK",
        "university":"Bachelor- Boston University(2023- 2023)",
        hashtags:["#top_candidates","#top_candidates"],
        tags:["New York","Marketing","London"]
    },
    {
        "name":"Roy Jade",
        "location":"Cambrige,UK",
        "university":"Bachelor- Yale(2023- 2023)",
        hashtags:["#top_candidates","#top_candidates"],
        tags:["New York","Marketing","London"]
    },
    {
        "name":"Ahmed Salman",
        "location":"New York,USA",
        "university":"Bachelor- Cambridge University(2023- 2023)",
        hashtags:["#top_candidates","#top_candidates"],
        tags:["New York","Marketing","London"]
    }
]

const Cards = () => {
  return (
    <div className='cards'>
        <div className='cards__main'>
            <div>
                <input type='checkbox' name="candidates"/>
                <span className='cards__total'>247 candidates</span>
            </div>
            <div>
                <span className='cards__text'>Qualified</span>
                <span>Task 25</span>
                <span>Disqualified 78</span>
            </div>
        </div>
        {
            candidatesList.map((item)=>{
                return <><hr/><Card name={item.name} location={item.location} university={item.university} hashtags={item.hashtags} tags={item.tags}/></>
            })
        }
    </div>
  )
}

export default Cards