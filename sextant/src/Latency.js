import React, { useEffect, useState } from 'react';

function Latency() {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:55455');

    ws.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.onmessage = (event) => {
      const receivedMessage = event.data;
      const packetTimestamp = parseInt(receivedMessage, 10);
      const currentTimestamp = Date.now();

      if (!isNaN(packetTimestamp) && !isNaN(currentTimestamp)) {
        const packetLatency = currentTimestamp - packetTimestamp;
        console.log('Received message:', receivedMessage);
        console.log('Latency:', packetLatency);
        setLatency(packetLatency);
      } else {
        console.log('Invalid message format');
      }
    };

    ws.onclose = () => {
      console.log('WebSocket closed');
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      {latency !== null ? (
        <p>{latency} ms</p>
      ) : (
        <p>Waiting for packets...</p>
      )}
    </div>
  );
}

export default Latency;
