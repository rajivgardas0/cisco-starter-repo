import React from "react";
import "./App.css";
import Banner from "./Banner";
import Exhibit from "./Exhibit";
import IPAddress from "./IPAddress";

function App() {
  return (
    <div className="App">
      <Banner />
      <div >
        <Exhibit title="IPv4 Address">
          <IPAddress addressType="IPv4" />
        </Exhibit>
      </div>
      <div >
        <Exhibit title="IPv6 Address">
          <IPAddress addressType="IPv6" />
        </Exhibit>
      </div>
    </div>
  );
}

export default App;
