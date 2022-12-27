import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

import { TfiDownload } from 'react-icons/tfi'
const Mobile = () => {
  return (
    <section className='section__mobile'>
      <div className='section__mobile--img'>
        <img
          className='section__mobile--img--fluid'
          src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
          height='300'
          alt=''
        />
        <div className='card-body'>
          <div className='card-body__items'>
            <img
              src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png'
              alt=''
              width={50}
              className='card-title'
            ></img>
            <ul className='card-text text'>
              <li>Stranger Things</li>
              <li>Downloading...</li>
            </ul>
          </div>
          <p style={{ color: 'black' }}>
            <TfiDownload />
          </p>
        </div>
      </div>
      <div className='section__mobile--content'>
        <h1 className='section__mobile--content--title'>
          Download your shows to watch offline
        </h1>
        <p className='section__mobile--content--text'>
          Save your favourites easily and always have something to watch.
        </p>
      </div>
    </section>
  )
}

export default Mobile
