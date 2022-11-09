import { connect, StringCodec } from "../node_modules/nats.ws/lib/src/mod.js";
import JSONViewer from 'react-json-viewer';


import React, { useState, useCallback, useEffect } from 'react';

const sc = StringCodec()
const Results = (props) => {
  const [nc, setConnection] = useState(undefined);
  const [messages, setMessages] = useState([]);
  const addMessage = (err, msg) => {
    // alert(sc.decode(msg.data));
    let json = JSON.parse(sc.decode(msg.data));
    setMessages(messages => [...messages, json]);
  }

  useState(() => {
    if (nc === undefined) {
      connect({ servers: ['ws://127.0.0.1:8090'] })
        .then(c => {
          setConnection(c);
          c.subscribe("local.reconresult.*", { callback: addMessage })
        });
    }
  });
  return (
    <div>
      <ul>
        <JSONViewer json={messages} />
      </ul>
    </div>
  );
};
export default Results;