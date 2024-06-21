import React from 'react'
import './footer.css'
import video2 from '../../Assets/Video.mp4'
import { FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillInstagram, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


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

            <div className='footerSocials flex'>
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />


            </div>
          </div>
          <div className='footerLinks flex'>
            {/*Group One*/}

            <div className='linkGroup'>
              <span className='groupTitle'>
                OUR AGENCY
              </span>

              <li className='footerList flex'>
                <FaChevronRight className='icon' />
                Services
              </li>
              <li className='footerList flex'>
                <FaChevronRight className='icon' />
                Insurance
              </li>
              <li className='footerList flex'>
                <FaChevronRight className='icon' />
                Agency
              </li>
              <li className='footerList flex'>
                <FaChevronRight className='icon' />
                Tourism
              </li>
              <li className='footerList flex'>
                <FaChevronRight className='icon' />
                Payment
              </li>

            </div>

                        {/*Group Two*/}

              <div className='linkGroup'>
              <span className='groupTitle'>
                PARTNERS
              </span>

              <li className='footerList flex'>
                <FaChevronRight className='icon' />
                Bookings
              </li>
              <li className='footerList flex'>
                <FaChevronRight className='icon' />
                RentCars
              </li>
              <li className='footerList flex'>
                <FaChevronRight className='icon' />
                Hotels
              </li>
              <li className='footerList flex'>
                <FaChevronRight className='icon' />
                Trivago
              </li>
              <li className='footerList flex'>
                <FaChevronRight className='icon' />
                TripAdvisor
              </li>

            </div>
                        {/*Group Three*/}

                        <div className='linkGroup'>
              <span className='groupTitle'>
                LAST MINUTE
              </span>

              <li className='footerList flex'>
                <FaChevronRight className='icon' />
                London
              </li>
              <li className='footerList flex'>
                <FaChevronRight className='icon' />
                California
              </li>
              <li className='footerList flex'>
                <FaChevronRight className='icon' />
                Indonesia
              </li>
              <li className='footerList flex'>
                <FaChevronRight className='icon' />
                Europe
              </li>
              <li className='footerList flex'>
                <FaChevronRight className='icon' />
                Oceania
              </li>

            </div>
          </div>

          <div className='footerDiv flex'>
            <small>TRAVEL WEBSITE</small>
            <small>COPYRIGHTS RESERVED - ROMAISA</small>
          </div>
        </div>
      </div>
    </section >

  )
}

export default Footer  