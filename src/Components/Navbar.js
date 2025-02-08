import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navhead'>

      <div className='speakhead'>
        <h3><span>I</span>speak</h3>
      </div>
      <div className='navigateheader'>
        <ul>
            <li>
            <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/about'>About</Link>
            </li>
            <li>
            <Link to='/courses'>Courses</Link>
            </li>
            <li>
            <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
            <Link to='/contact'>Contact Us</Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
