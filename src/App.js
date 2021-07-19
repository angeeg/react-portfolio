import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';


function App() {
  const pages = [<About/>, <Portfolio/>, <Contact/>];
  const [page, setPage] = useState(pages[0]);

  return (
    <div className="App">
      <Header>
        <Navigation setPage={setPage} pages={pages}/>
      </Header>
      {page}
      <Footer/>
    </div>
  );
}

export default App;
