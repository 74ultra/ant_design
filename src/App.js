import React from 'react';
import {
  Route,
  Switch,
  useHistory
} from 'react-router-dom';
import { LandingPage } from './components/pages/LandingPage';

import 'antd/dist/antd.css';


function App() {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
    </Switch>
  );
}

export default App;
