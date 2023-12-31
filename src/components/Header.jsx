import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link"

const Header = () => {
  return (
   <nav>
        <h1>Techstar</h1>
        <main>
            <HashLink to={"/#home1"}>Home</HashLink>
            <Link to={"/contact"}>Contact</Link>
            <HashLink to={"/#about"}>About</HashLink> 
            <HashLink to={"/#brands"}>Brands</HashLink>
            <Link to={"/services"}>Services</Link>
        </main>
   </nav>
  )
}

export default Header;

// why #about to create a div and id will be about, that's why we given scroll beh is smooth