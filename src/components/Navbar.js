import React from 'react'
import  './Navbar.css'
import Hamburgerdrawer from './Hamburgerdrawer.js';
function Navbar({setCategory}) {
  return (
    <div className='nav'>
      <div className='menu'>
        <Hamburgerdrawer setCategory={setCategory} />
      </div>
   
    <img style={{cursor:'pointer'}}
    src="http://www.inshorts.com/dist/images/home_page/logo@2x.png"
    height='80%'
    alt='logo' />
  
    </div>
  )
}

export default Navbar
