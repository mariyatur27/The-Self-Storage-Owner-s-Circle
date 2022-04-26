import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone , faCalendarDays} from '@fortawesome/free-solid-svg-icons'

function Team() {
  return (
    <div className='about-section'>
        <div className='row' style={{textAlign: 'center'}}>
            <div className='container team-img'>
              <h1>Meet our team!</h1>
                <img className="team-members-2" src='../../assets/seth.jpg'/>
                <div className='socials'>
                  <FontAwesomeIcon icon={faEnvelope} color="white" className='socials-icons'/>
                  <FontAwesomeIcon icon={faPhone} color="white" className='socials-icons'/>
                  <FontAwesomeIcon icon={faCalendarDays} color="white" className='socials-icons'/>
                </div>
                <h1>Seth</h1>
                <h5 style={{marginTop: "-3%"}}>Community Manager</h5>
            </div>

            <div className='container team-img'>
              <h1>Meet our contributors!</h1>
                <div className='row-2'>
                  <div className='contributor'>
                    <img className="team-members" src='../../assets/contributors.jpg'/>
                    <h3>Coming Soon</h3>
                  </div>
                  <div className='contributor'>
                    <img className="team-members" src='../../assets/contributors.jpg'/>
                    <h3>Coming Soon</h3>
                  </div>
                  <div className='contributor'>
                    <img className="team-members" src='../../assets/contributors.jpg'/>
                    <h3>Coming Soon</h3>
                  </div>
                  <div className='contributor'>
                    <img className="team-members" src='../../assets/contributors.jpg'/>
                    <h3>Coming Soon</h3>
                  </div>
                  <div className='contributor'>
                    <img className="team-members" src='../../assets/contributors.jpg'/>
                    <h3>Coming Soon</h3>
                  </div>
                  <div className='contributor'>
                    <img className="team-members" src='../../assets/contributors.jpg'/>
                    <h3>Coming Soon</h3>
                  </div>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Team