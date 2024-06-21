import React, { useEffect } from 'react'
import './main.css'
import { CiLocationOn } from "react-icons/ci";
import { LuClipboardSignature } from "react-icons/lu";


import img1 from '../../Assets/imgs/img(1).jpg'
import img2 from '../../Assets/imgs/img(2).jpg'
import img3 from '../../Assets/imgs/img(3).jpg'
import img4 from '../../Assets/imgs/img(4).jpg'
import img5 from '../../Assets/imgs/img(5).jpg'
import img6 from '../../Assets/imgs/img(6).jpg'
import img7 from '../../Assets/imgs/img(7).jpg'
import img8 from '../../Assets/imgs/img(8).jpg'
import img9 from '../../Assets/imgs/img(9).jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Known for its stunning overwater bungalows and crystal-clear waters, Bora Bora offers an idyllic setting for a perfect romantic getaway. Visitors can enjoy water sports, luxury resorts, and breathtaking sunsets.',
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Nestled high in the Andes Mountains, Machu Picchu is an ancient Incan city surrounded by lush greenery. Its archaeological significance and panoramic views attract visitors from all over the world.',
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The Great Barrier Reef is a paradise for divers and snorkelers. With its vibrant coral reefs and diverse marine life, it’s a spectacular natural wonder that promises an unforgettable experience.',
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Santorini',
    location: 'Greece',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Famous for its white-washed buildings and stunning sunsets, Santorini offers a unique blend of history, culture, and beautiful beaches. It’s a perfect destination for relaxation and exploration.',
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Banff National Park',
    location: 'Canada',
    grade: 'ADVENTURE NATURE',
    fees: '$400',
    description: 'Banff National Park, located in the heart of the Canadian Rockies, is known for its stunning landscapes, including turquoise lakes, majestic mountains, and abundant wildlife. It’s a haven for outdoor enthusiasts.',
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Kyoto',
    location: 'Japan',
    grade: 'CULTURAL RELAX',
    fees: '$650',
    description: 'Kyoto, once the capital of Japan, is known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses. It’s a city where ancient traditions meet modern life.',
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Cape Town',
    location: 'South Africa',
    grade: 'ADVENTURE NATURE',
    fees: '$550',
    description: 'Cape Town is renowned for its stunning landscapes, from the iconic Table Mountain to its beautiful beaches. The city offers a mix of adventure, culture, and vibrant nightlife.',
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Paris',
    location: 'France',
    grade: 'CULTURAL RELAX',
    fees: '$750',
    description: 'Paris, the city of love, is known for its art, fashion, and culture. Visitors can explore historic landmarks like the Eiffel Tower and Louvre Museum, stroll along the Seine, and enjoy exquisite cuisine.',
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Bali is an Indonesian paradise known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs. It’s a destination that offers a rich culture and stunning natural beauty.',
  },
];




const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <section className="main container section">

      <div className='secTitle'>
        <h3 data-aos="fade-right"

          className='title'>
          Most Visited Destinations
        </h3>
      </div>

      <div className='secContent grid'>
        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up"
                className='singleDestinations'>
                <div className='imageDiv'>
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className='cardInfo'>
                  <h4 className='destTitle'>{destTitle}</h4>
                  <span className='continent flex'>
                    <CiLocationOn className='icon' />
                    <span className='name'>{location}</span>
                  </span>

                  <div className='fees grid'>
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className='price'>
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className='desc'>
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS
                    <LuClipboardSignature className='icon' />
                  </button>

                </div>
              </div>
            )

          })
        }


      </div>
    </section>
  )
}

export default Main