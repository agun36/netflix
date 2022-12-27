import React from 'react'

const Kid = () => {
  return (
    <article className='article__kids'>
      <img
        src='https://occ-0-300-1168.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f'
        height='300'
        alt=''
        className='article__kids--image-fluid'
      />
      <div className='article__kids--text'>
        <h1 className='article__kids--text--title'>
          Create profiles for kids.
        </h1>
        <p className='article__kids--text--sub-text'>
          Send kids on adventures with their favourite charcters in a space made
          just for them --free with your membership.
        </p>
      </div>
    </article>
  )
}

export default Kid
