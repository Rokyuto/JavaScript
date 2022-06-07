import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client" // React18 ReactDom import syntax

import App from './App';

const container = document.getElementById("root") // Get the root element
const root = createRoot(container) // Create Root

// Render the content/root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// App = App.jsx (Entire Project configuration) || Get element with id = 'root' from App (public\index.html)
//ReactDOM.render(<App />, document.getElementById('root')); // Render the application

