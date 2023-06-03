import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit title="IP Address">
        <p>192.168.1.1</p>
      </Exhibit>
      <Exhibit title="Latency">
        <p>25 ms</p>
      </Exhibit>
    </div>
  );
}

export default App;
