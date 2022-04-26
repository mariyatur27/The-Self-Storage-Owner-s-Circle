import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Page2() {
  return (
    <div className='slide-section about-section'>
      <h1>How We Can Help You</h1>
      <p style={{fontSize: "120%", marginBottom: '-2%'}}>Want to learn the best secrets & expertise about selling your self-storage facility?
      Schedule a conversation by clicking <a href='https://go.oncehub.com/TalkToSethHenry' style={{color: '#0707a1', textDecoration: 'underline'}} target='_blank'>here</a>.</p><br></br> 
      <p style={{fontSize: "120%", marginBottom: '-2%'}}>On our call we will walk through our free consultation process. Yes, it’s actually free. We’re not selling anything. Just click the link to get booked on our calendar and begin the three-step process below. </p> <br></br> 
      <p style={{fontSize: "120%", marginBottom: '5%'}}>This process is designed to help you learn the knowledge necessary to get the most money and pay the least taxes when you’re getting ready to sell your self-storage business. We want to share knowledge, information, and tools to help you make the best decisions around selling your self-storage business. </p>
      <div className='row'>
        <div className='box-align' style={{textAlign: "left"}}>
            <h1>Step 1 🎯</h1>
            <h3>Define your goals</h3>
            <p>This is a listening and learning call. We will learn your goals and priorities, and identify any key questions and challenges you have.</p>
        </div>
        <div className='box-align' style={{textAlign: "right"}}>
          <img className='hero-img right' src='../../assets/ss1-img.jpeg' />
        </div>
      </div>

      <div className='row'>
        <div className='box-align' style={{textAlign: "left"}}>
          <img className='hero-img left hide' src='../../assets/ss2-img.webp' />
        </div>
        <div className='box-align' style={{textAlign: "left"}}>
            <h1>Step 2 👨🏻‍💼</h1>
            <h3>Recieve a customized plan, based on your unique needs & circumstances</h3>
            <p>We will design a customized plan & roadmap just for you, based on your needs, and email this to you.</p>
        </div>
      </div>

      <div className='row'>
        <div className='box-align' style={{textAlign: "left"}}>
            <h1>Step 3 💵</h1>
            <h3>Get matched with a peer who can share the best advice and answer any additional questions that come up.</h3>
            <p>We will connect you with a self-stroage owner who can help answer any and all questions that come up for you. </p>
        </div>
        <div className='box-align' style={{textAlign: "right"}}>
          <img className='hero-img right' src='../../assets/ss3-img.webp' />
        </div>
      </div>

      <div className='row'>
        <div className='box-align' style={{textAlign: "left"}}>
          <img className='hero-img left hide' src='../../assets/beach.jpg' />
        </div>
        <div className='box-align' style={{textAlign: "left"}}>
            <h1>Outcome 🎊</h1>
            <h3>Hooray! You did it! You maximized the sale price and minimized the taxes you paid when you sold your self-storage facility</h3>
            <p>Now go enjoy that beach in Hawaii or whatever your dream was. You did it!</p>
        </div>
      </div>

    </div>
  )
}

export default Page2