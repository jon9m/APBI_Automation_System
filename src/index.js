import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

import axios from 'axios';

//Default configuration - use different instances for different base URLs
axios.defaults.baseURL = "apbi.com";  //TODO - use config file - then use axios.post('/action').then...
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';  //common headers are general hearder
axios.defaults.headers.post['Content-type'] = 'appliaction/josn'; //this is deault 

axios.interceptors.request.use(request => {
    console.log(request);
    return request; //Always return 
}, error => {
    console.log(error);
});

ReactDOM.render(<BrowserRouter basename="/adminConsole"><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();



