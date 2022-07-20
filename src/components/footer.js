import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    const [email, setEmail] = useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
        const data={
            Email: email,
        }
        axios.post('https://sheet.best/api/sheets/6490fc47-a3db-4cc7-8508-16c178b0b032', data).then((response)=>{
            console.log(response);
            setEmail('');
        })
    }
  return (
    <div className='footer'>
        <div className='row'>
            <div className='logo'>
                <a href='/'><img className='the_logo' src='../../assets/new_logo.png'/></a>
            </div>
            <div className='links'>
                <nav className='navbar-container' id="extra_space">
                    <li style={{color: 'white'}}><a href='/#about-section'><FontAwesomeIcon icon={faChevronRight} color="white" style={{marginRight: '3%'}}/>About Us</a></li>
                    <li style={{color: 'white'}}><a href='/how-we-can-help-you'><FontAwesomeIcon icon={faChevronRight} color="white" style={{marginRight: '3%'}}/>How We Can Help You</a></li>
                    {/* <li style={{color: 'white'}}><a href='/team'><FontAwesomeIcon icon={faChevronRight} color="white" style={{marginRight: '3%'}} />Our Team</a></li> */}
                    <li style={{color: 'white'}}><a href='/#contact'><FontAwesomeIcon icon={faChevronRight} color="white" style={{marginRight: '3%'}} />Contact Us</a></li>
                </nav> 
            </div>
        </div>


        <form onSubmit={handleSubmit}>
            <input type="email" id="email-2" placeholder='Keep in touch with us...' onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <button type="submit" style={{background: 'transparent', border: 'none'}}>
                <FontAwesomeIcon icon={faPaperPlane} color="white"/>
            </button>
        </form>
        <div className="tcontainer">
            <a href='/how-we-can-help-you'>
            <div className="ticker-wrap">
                <div className="ticker-move">
                    <div className="ticker-item">How can we help you?</div>
                    <div className="ticker-item">Learn how to get the most money and pay the least taxes when selling your self-storage business. </div>
                    <div className="ticker-item">The best, expert advice. 100% free. Always.</div>
                </div>
            </div>
            </a>
        </div>
    </div>
  )
}

export default Footer
