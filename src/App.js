import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Button from './components/button';
import Hero from './components/hero';
import Page2 from './components/pages/page_2';
import Page3 from './components/pages/page_3';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/footer';
import Team from './components/team';
import Contact from './components/contact';

function App() {
  return (
    <>
    <Navbar />
    <Router>
        <Routes>
          <Route path='/how-we-can-help-you' 
          element={
            <div>
              <Page2 />
              <Contact />
            </div>
          } />
          <Route path='/team' 
          element={
            <div>
              {/* <Page3 /> */}
              <Team />
              <Contact />
            </div>
          } />
          <Route path='/free-tools' element={<Page3 />} />
          < Route path='/'
            element={
              <div>
                <Hero />
                <Contact />
              </div>
            }
          />
        </Routes>
     </Router>
     <Footer />
    </>
  );
}

export default App;
