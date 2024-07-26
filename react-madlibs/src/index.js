import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Madlib from './Madlib'; // Ensure this import matches the export

ReactDOM.render(
  <React.StrictMode>
    <Madlib />
  </React.StrictMode>,
  document.getElementById('root')
);