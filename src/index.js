import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import WorkoutTracker from './WorkoutTracker'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

ReactDOM.render(
  <Router>
    <WorkoutTracker />
  </Router>,
  document.getElementById('root')
);
