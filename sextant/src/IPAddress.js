import React, { useEffect, useState } from 'react';


function IPAddress({ addressType }) {
  const [ipAddress, setIPAddress] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (addressType === 'IPv4') {
          response = await fetch('https://api.ipify.org?format=json');
        } else if (addressType === 'IPv6') {
          response = await fetch('https://api64.ipify.org?format=json');
        }
        const data = await response.json();
        setIPAddress(data.ip);
      } catch (error) {
        console.log('Error fetching IP address:', error);
      }
    };

    fetchData();
  }, [addressType]);

  return (
    <div className="IPAddress">
      <h2 className="IPAddressHeading">{addressType}</h2>
      <div className="IPAddressContent">{ipAddress}</div>
    </div>
  );
}

export default IPAddress;
