import React from 'react';
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Card from './Components/Card';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
