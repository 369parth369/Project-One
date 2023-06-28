import React from 'react'

const Contact = () => {
  return (
    <div className='con'>
      <div className='con1'>
        <h1>Contact us</h1>

        <form className='con2'>
            <div className='con3'>
                <h3 className='con4'>Name</h3>
                <input className='con5' type="text" required placeholder="ABC" />
            </div>
            <div className='con3'>
            <h3 className='con4'>Email</h3>
            <input className='con5' type="email" required placeholder="ABC@xyz.com" />
            </div>
            <div className='con3'>
            <h3 className='con4'>Message</h3>
            <input className='con5' type="text" required placeholder="Tell us about your queries..." />
            </div>

        </form>
            <button className='button1' type='Submit'>Send</button>

      </div>


    </div>
  )
}

export default Contact
