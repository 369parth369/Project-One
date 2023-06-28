import React from 'react'

const Header = () => {
  return (
   <nav>
        <h1>Techstar</h1>
        <main>
            <a href={"/#home1"}>Home</a>
            <a href={"/contact"}>Contact</a>
            <a href={"/#about"}>About</a> 
            <a href={"/#brands"}>Brands</a>
            <a href={"/services"}>Services</a>
        </main>
   </nav>
  )
}

export default Header;

// why #about to create a div and id will be about, that's why we given scroll beh is smooth