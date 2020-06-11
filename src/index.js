import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import WorkoutTracker from './WorkoutTracker';

ReactDOM.render(
  <Router>
    <WorkoutTracker />
  </Router>,
  document.getElementById('root')
);
