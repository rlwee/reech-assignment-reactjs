import React from 'react';


import './App.scss';

import Header from './components/header_navigaton/header';
import Hero from './components/hero_section/index';
import Body from './components/body_section/index';
import Expert from './components/experts_section/index';
import Banner from './components/banner_section/index';
import Footer from './components/footer_section/index';

function App() {
  return (
    <div className="App"
          style={{ height: '100px',
                  background: 'cornflowerblue' }}
      >

        
        <Header/>
        <Hero/>
        <Body/>
        <Expert/>
        <Banner/>
        <Footer/>
      
    </div>
  );
}

export default App;
