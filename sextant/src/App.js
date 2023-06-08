import React from "react";
import "./App.css";
import Banner from "./Banner";
import Exhibit from "./Exhibit";
import IPAddress from "./IPAddress";
import Latency from "./Latency";

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit title="IPv4 Address">
        <IPAddress addressType="IPv4" />
      </Exhibit>
      <Exhibit title="IPv6 Address">
        <IPAddress addressType="IPv6" />
      </Exhibit>
      <Exhibit title="Latency">
        <Latency/>
      </Exhibit>
    </div>
  );
}

export default App;
