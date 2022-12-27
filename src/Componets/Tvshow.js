import React from 'react'

const Tvshow = () => {
  return (
    <section className='section__main--show'>
      <div className='section__main--show--head'>
        <h1 className='section__main--show--title'>Enjoy on your TV.</h1>
        <p className='section__main--show-text'>
          Watch on Smart TVs, Blu-ray Players, and more.
        </p>
      </div>
      <div className='section__main--show--imag--fluid'>
        <img
          className='section__main--show--imag--fluid--img'
          height='300'
          src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
          alt=''
        />

        <video
          style={{ width: '300px' }}
          className='video-responsive '
          data-uia='our-story-card-video'
          autoplay='true'
          playsinline=''
          muted='false'
          loop='true'
        >
          <source
            src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'
            type='video/mp4'
          ></source>
        </video>
      </div>
    </section>
  )
}

export default Tvshow
