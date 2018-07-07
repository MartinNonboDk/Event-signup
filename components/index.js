import React from 'react';
import ReactDOM from 'react-dom';
import Events from "./events/events";
const backupData = require('../stub-data/events.json');
require('../styles/index.scss');

fetch('https://api.myjson.com/bins/njnra')
    .then(response => {
        // I don't trust the json host website - so provide similar backup data for demo
        // It just looks more nice with and actual data fetch
        return response.ok ? response.json() : backupData;       
    })
    .then(events =>  {
      console.log("first", events);
      ReactDOM.render(<Events events={events} />, document.getElementById('signup'));
    }
);

