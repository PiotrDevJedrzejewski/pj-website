import React from 'react'
import { Link } from 'react-router-dom'

import {
  AiOutlineFundProjectionScreen,
  AiOutlinePhone,
  AiOutlineLink,
} from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className='nav'>
      <Link to='/'>
        <div className='nav__logo'>
          <img src={require('../assets/images/logoPytJ.png')} alt='logo' />
        </div>
      </Link>
      <ul className='nav__links'>
        <li>
          <Link to='/contact' className='nav__link'>
            <AiOutlinePhone /> Contact
          </Link>
        </li>
        <li>
          <Link to='/projects' className='nav__link'>
            <AiOutlineFundProjectionScreen /> Projects
          </Link>
        </li>
        <li>
          <Link to='/about' className='nav__link'>
            <AiOutlineLink /> About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
