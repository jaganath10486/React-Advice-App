import React from 'react';
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Card from './Components/Card';
import Print from './Components/Print';

function App() {
  return (
    <div className="App">
      <Card/>
      <Print/>
    </div>
  );
}

export default App;
