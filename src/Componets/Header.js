import React from 'react'
import Content from './Content'
import Nav from './Nav'

const Header = () => {
  return (
    <header
      className='header'
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
url("https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/3941ce64-4089-4fbc-b34a-f9faa7209071/NG-en-20221017-popsignuptwoweeks-perspective_alpha_website_medium.jpg")`,
      }}
    >
      <Nav />
      <Content />
    </header>
  )
}

export default Header
