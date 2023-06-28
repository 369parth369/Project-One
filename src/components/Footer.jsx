import React from 'react'
import {AiFillLinkedin, AiFillYoutube, AiFillInstagram} from "react-icons/ai"


const Footer = () => {
  return (
   <footer>
    <div className='footer1'>
        <h1 className='footer2'>TECHSTAR</h1>
        <p className='footer3'>@all rights reserved</p>
    </div>
    <div>
     <h5 className='footer4'>Follow us</h5>
     <div className='footer5'>
      <div className='footer6'><a className='footer7' href="https://www.youtube.com/">Youtube</a>
      <AiFillYoutube style={{fontSize:'2rem'}}/> </div>
      <div className='footer6'> <a className='footer7' href='https://www.instagram.com//'>Insta</a>
       <AiFillInstagram style={{fontSize:'2rem'}}/> </div>
       <div className='footer6'> <a className='footer7' href='https://www.linkedin.com/hp'>LinkedIn</a>
        <AiFillLinkedin style={{fontSize:'2rem'}}/> </div>
     </div>
    </div>
 </footer>
  )
};

export default Footer
