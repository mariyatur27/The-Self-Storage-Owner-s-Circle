import axios from 'axios';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot , faSquarePhone, faSquareEnvelope} from '@fortawesome/free-solid-svg-icons';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(name, email, message);
        const data={
            Name: name,
            Email: email,
            Message: message
        }
        axios.post('https://sheet.best/api/sheets/ecadfddb-f4b2-4155-a384-0da8a90a29f5', data).then((response)=>{
            console.log(response);
            setName('');
            setEmail('');
            setMessage('');
        })
    }
  return (
    <div className='about-section' id="contact">
        <h1>Interested? Contact us!</h1>
        <p>Fill out this form to let us know how we can help you. All information provided is 100% free. Always. We don’t spam. Ever.</p>
        <div className='row'>
            <div className='box' id='box1'>
                <h2>Schedule a meeting with us:</h2>
                <a href='https://go.oncehub.com/TalkToSethHenry' target={'a_blank'}><button type="button" id="submit-button">Schedule a Meeting on OnceHub</button></a>
                <p>We are a community of self-storage owners, based across the United States of America.<br></br> Our home office is in Rocky Mount, NC.</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340566.753996778!2d-82.10459105266524!3d35.14983113248808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e0!3m2!1sen!2sca!4v1650667187351!5m2!1sen!2sca" width={650} height={350} style={{border: 0 }}></iframe>
            </div>
            <div className='box' id='box2'>
                <h2>Send us your questions and messages:</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" id="name" placeholder='Your full name...' class="input-field" onChange={(e)=>setName(e.target.value)} value={name}/><br></br>
                    <input type="email" id="email" placeholder='Your email address...' class="input-field" onChange={(e)=>setEmail(e.target.value)} value={email}/><br></br>
                    <input type="message" id="message" placeholder='Your message...' class="input-field" onChange={(e)=>setMessage(e.target.value)} value={message}/><br></br>
                    <button type='submit' id="submit-button">Send Message</button>
                </form>
                <div className='contacts-icons'>
                    <div className='row'>
                        <FontAwesomeIcon icon={faSquarePhone} color="#2d3891" class='icon-contact' style={{verticalAlign: 'middle'}}/>
                        <a href='tel:19842540884' style={{color: '#2d3891', width: '30%', marginTop: '2%'}}><h4 className='contact-text'>+1 984-254-0884</h4></a>
                    </div>
                    <div className='row'>
                        <FontAwesomeIcon icon={faSquareEnvelope} color="#2d3891" class='icon-contact' style={{verticalAlign: 'middle'}}/>
                        <a href='mailto:s.saeugling@gmail.com' style={{color: '#2d3891', width: '30%', marginTop: '2%'}}><h4 className='contact-text'>s.saeugling@gmail.com</h4></a>
                    </div>
                    <div className='row'>
                        <FontAwesomeIcon icon={faLocationDot} color="#2d3891" class='icon-contact' style={{verticalAlign: 'middle'}}/>
                        <a href='https://goo.gl/maps/uzAp94s3Cd5f7LEw5' style={{color: '#2d3891', width: '30%', marginTop: '2%'}}><h4 className='contact-text'>North Carolina, USA</h4></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact