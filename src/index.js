import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App';
import Store from './models/Store';

ReactDOM.render(<App store={Store} />, document.getElementById('root'));
