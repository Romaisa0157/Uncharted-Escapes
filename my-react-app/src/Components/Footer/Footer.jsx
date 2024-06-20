import React from 'react'
import './footer.css'
import video2 from '../../Assets/Video.mp4'
import { FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillInstagram, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";


const Footer = () => {
  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video2} autoPlay loop muted typeof='video/mp4' />
      </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel With Us</h2>
          </div>

          <div className='inputDiv flex'>
            <input type='text' placeholder='Enter Email Address' />

            <button className='btn flex' type='submit'>
              SEND<FiSend className='icon' />
            </button>
          </div>
        </div>
        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href="https://www.google.com" className='logo flex'>
                <MdOutlineTravelExplore className='icon' /> Travel.
              </a>
            </div>

            <div className='footerParagraphg'>
              Travel with us and explore the world in a unique way. We offer personalized travel
            </div>

            <div className='footerSocials'>
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />


            </div>
          </div>
        </div>
      </div>
    </section >

  )
}

export default Footer