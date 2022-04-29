import React from 'react';
import './hero.css';
import { Link } from 'react-router-dom';


function Hero() {
    
    return (
        <>
        <div className='hero-section'>
            <img src="../../assets/new_logo.png" className='logo2' />
            <br></br>
            <a href="/how-we-can-help-you"><button className='lrn-more' id='lrn-more'>How We Can Help You</button></a>
        </div>

        <div className='about-section' id="about-section">
            <h1>Who are we? We are ...</h1>
            <div className='row'>
                <div className='container extra-padding'>
                    <h1 style={{ fontSize: "80px", textAlign: "center"}}>🖐️</h1>
                    <h2>Here to help you</h2>
                    <p>Learn all the secrets to maximizing the value of your sale price and reducing or eliminating your taxes when you sell your self-storage business.</p>
                </div>
                <div className='container extra-padding'>
                    <h1 style={{ fontSize: "80px", textAlign: "center"}}>📦</h1>
                    <h2>A community for self-stroage owners</h2>
                    <p>You’ve worked hard and we want to help you get what you deserve when you sell.</p>
                </div>
                <div className='container extra-padding'>
                    <h1 style={{ fontSize: "80px", textAlign: "center"}}>🏢</h1>
                    <h2>A community by self-stroage owners</h2>
                    <p>We are self-storage owners. Peers are often our best source of support and knowledge. Welcome. We’re glad you’re here. </p>
                </div>
            </div>
            <div className='row' style={{marginTop: "-5%"}}>
                <div className='container extra-padding'>
                    <h1 style={{ fontSize: "80px", textAlign: "center"}}>✨</h1>
                    <h2>Expert advice, always free</h2>
                    <p>We want to share knowledge, information, and tools to help you make the best decisions when selling your self-storage business. For free.</p>
                </div>
                <div className='container extra-padding'>
                    <h1 style={{ fontSize: "80px", textAlign: "center"}}>💰</h1>
                    <h2>100% free. Always</h2>
                    <p>Seriously. We believe in abundance and relationships. We can make the pie bigger by sharing, not hoarding, information and knowledge. So we give away knowledge and expertise, for free. No catch. No gimmick. We’re not selling anything.</p>
                </div>
                <div className='container extra-padding'>
                    <h1 style={{ fontSize: "80px", textAlign: "center"}}>📓</h1>
                    <h2>Learn best practices</h2>
                    <p>Thankfully experience and wisdom are teachers that can be shared.  Learn the best practices for how to approach selling your self-storage facility.</p>
                </div>
            </div>
        </div>
        <div className='slide-section about-section'>
            <h1>Benefits of The Self-Storage Owner’s Circle</h1>
            <p style={{fontSize: "120%", marginBottom: "-4%"}}>We are self-storage owners. We want to help fellow owners increase their sale price and reduce taxes—that's why we started this site. So you can easily learn everything we learned the hard way.</p>
        </div>
        <div className='row'>
        <div className='container extra-padding'>
            <h1 className='emoji'>📚</h1>
            <h2 className='shift-up'>Learn the best content</h2>
        </div>

        <div className='container extra-padding'>
            <h1 className='emoji'>💵</h1>
            <h2 className='shift-up'>Maximize sale price and minimize the taxes you pay</h2>
        </div>

        <div className='container extra-padding'>
            <h1 className='emoji'>🛠️</h1>
            <h2 className='shift-up'>Learn creative financing tools that benefit you as an owner </h2>
        </div>
        </div>
        </>
        )
}

export default Hero