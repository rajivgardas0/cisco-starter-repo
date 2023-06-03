import React from 'react';
import './App.css';

function Banner() {
  return <h1 className="Banner">Sextant - Network Dashboard</h1>;
}

function Exhibit({ title, children }) {
  return (
    <div className="Exhibit">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

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
