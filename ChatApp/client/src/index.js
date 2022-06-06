import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// App = App.jsx (Entire Project configuration) || Get element with id = 'root' from App (public\index.html)
ReactDOM.render(<App />, document.getElementById('root')); // Render the application

