import React from 'react'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";

import './home.css'
import video from '../../Assets/Video.mp4'

const Home = () => {
  return (
    <section className='home'>
      <div className='overlay'>
        <video src={video} muted autoPlay loop type="video/mp4"></video>
      </div>

      <div className='homeContent container'>
        <div className='textDiv'>
          <span className='smallTect'>
            Our Packages
          </span>
          <h1 className='homeTitle'>
            Search your Holiday
          </h1>

        </div>

        <div className='cardDiv grid'>

          <div className='destinationInput'>
            <label htmlFor ="city">Search your destination</label>
            <div className='input flex'>
              <input type ="text" placeholder='Enter name here...'/>
              <GrLocation className="icon" />
            </div>
          </div>
          <div className='dateInout'>
            <label htmlFor ="date">Select your date:</label>
            <div className='input flex'>
              <input type ="date"/>
              <GrLocation className="icon" />
            </div>
          </div>
          <div className='priceInput'>
            <div className='label_total flex'>
              <label htmlFor='price'>Max Price</label>
              <h3 className='total'> $5000</h3>
            </div>
            <div className='input flex'>
              <input type ="range" max = "5000" min ="100"/>
            </div>
          </div>
          <div className='searchOptions flex'>
          <HiFilter className='icon'/>
          <span>MORE FILTERS</span>


          </div>
      </div>

      .homeFooterIcons
      </div>
    </section>

  )
}

export default Home