import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faXmark} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  function openMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('invisible');
  }
  function removeMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('invisible');
  }
  return (
   <>
    <nav className="navbar">
        <div className="navbar-container" id="navbar-un">
           <li><a href='/'>Home</a></li>
           <li><a href='/#about-section'>About Us</a></li>
           <li><a href='/how-we-can-help-you'>How We Can Help You</a></li>
           {/* <li><a href='/team'>Our Team</a></li> */}
           <li><a href='/#contact'>Contact Us</a></li>
        </div>
    </nav>
    <div className='navbar-2' onClick={openMenu}>
      <FontAwesomeIcon icon={faBars} color="white" id='icon'/>
    </div>
    <div className='invisible' id='menu'>
      <li className='menu-item' onClick={removeMenu}><a href='/' style={{color: 'black'}}>Home</a></li>
      <li className='menu-item' onClick={removeMenu}><a href='/#about-section' style={{color: 'black'}}>About Us</a></li>
      <li className='menu-item' onClick={removeMenu}><a href='/how-we-can-help-you' style={{color: 'black'}}>How We Help You</a></li>
      {/* <li className='menu-item' onClick={removeMenu}><a href='/team' style={{color: 'black'}}>Our Team</a></li> */}
      <li className='menu-item' onClick={removeMenu}><a href='/#contact' style={{color: 'black'}}>Contact Us</a></li>
    </div>
   </>
  )
}

export default Navbar