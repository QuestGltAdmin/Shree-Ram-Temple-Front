// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// App.jsx
import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import {store} from './store/store';
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);

