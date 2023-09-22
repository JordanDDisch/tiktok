import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { TimeProvider } from 'src/providers/TimeProvider/index';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TimeProvider>
      <App />
    </TimeProvider>
  </React.StrictMode>
);
