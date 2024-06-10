import React from 'react'
import './home.css'
import video from '../../Assets/Video.mp4'
const Home = () => {
  return (
    <section className='home'>
      <div className='overlay'>
        <video src={video} type="video/mp4"></video>
      </div>
    </section>
  )
}

export default Home