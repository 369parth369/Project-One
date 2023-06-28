import React from 'react'

import vg from '../assets/2.webp'
import vm from '../assets/5.jpeg'
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <div id='home1'>
    <div className='home'>
        <main className='home1'>
            <h1 className='home2'>Techstar</h1>
            <p className='home3'>Solution to all your problems</p>
        </main>
    </div>
    <div className='home4'>
        <img className='img1' src={vg} alt='Graphics' />
        <div className='home5'>
            <p className='home6'>    
                We are  your one and only solution to the tech problem you face every day.
                We are leading tech company whose aim is to increase the problem solving ability.
            </p>
        </div>
    </div>

    <div className='home7' id='about'>
        <div className='home8'>
            <h1 className='home9'>Who are We ???</h1>
            <p className='home10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magnam earum quis itaque reprehenderit. Pariatur hic repellat corrupti id dolorem ullam aperiam. Incidunt doloremque asperiores tempore iste a. Dolore rerum tenetur aliquam esse eligendi cum quos consequuntur ipsum voluptas. Dignissimos, beatae reiciendis quisquam nisi ea doloremque suscipit sed minus optio!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magnam earum quis itaque reprehenderit. Pariatur hic repellat corrupti id dolorem ullam aperiam. Incidunt doloremque asperiores tempore iste a. Dolore rerum tenetur aliquam esse eligendi cum quos consequuntur ipsum voluptas. Dignissimos, beatae reiciendis quisquam nisi ea doloremque suscipit sed minus optio! voluptas. Dignissimos, beatae reiciendis quisquam nisi ea doloremque suscipit sed minus optio!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magnam earum quis itaque reprehenderit. Pariatur hic repellat corrupti id dolorem ullam aperiam. Incidunt doloremque asperiores tempore iste a. Dolore rerum tenetur aliquam esse eligendi cum quos consequuntur ipsum voluptas. Dignissimos, beatae reiciendis quisquam nisi ea doloremque suscipit sed minus optio!
            </p>
           
        </div>
         <div className='img2-container'>
         <img className='img2' src={vm} alt='Graphics' /> </div>
    </div>
    <div className='home11' id='brands'>
        <div className='home12'>
        <h1 className='home13'>Brands</h1>
        <article className='home14'>
            <div className='home15' style={{
                animationDelay: "0.3s",
            }}>
            <AiFillAmazonCircle style={{fontSize:'4rem'}}/>
            <p className='home16'>Amazon</p>
            </div>
            <div className='home15' style={{
                animationDelay: "0.5s",
            }}>
            <AiFillGoogleCircle style={{fontSize:'4rem'}}/>
            <p className='home16'>Google</p>
            </div>
            <div className='home15' style={{
                animationDelay: "0.7s",
            }}>
            <AiFillYoutube style={{fontSize:'4rem'}}/>
            <p className='home16'>Youtube</p>
            </div>
            <div className='home15' style={{
                animationDelay: "1s",
            }}>
            <AiFillInstagram style={{fontSize:'4rem'}}/>
            <p className='home16'>Instagram</p>
            </div>
        </article>
        </div>
    </div>
    
    </div>

    
  )
}

export default Home
