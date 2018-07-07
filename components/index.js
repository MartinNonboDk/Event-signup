import React from 'react';
import ReactDOM from 'react-dom';
import EventsContainer from "./events-container/events-container";
const backupData = require('../stub-data/events.json');
require('../styles/index.scss');

fetch('https://api.myjson.com/bins/x5612')
  .then(response => {
    // I don't trust the json host website - so provide similar backup data for demo
    // It just looks more nice with and actual data fetch
    return response.ok ? response.json() : backupData;       
  })
  .then(events =>  {
    //When we have our data in place, we render the app
    ReactDOM.render(<EventsContainer events={events} />, document.getElementById('signup'));
  }
);

