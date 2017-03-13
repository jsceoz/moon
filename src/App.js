import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginPage from './LoginPage';
import GroupListPage from './GroupListPage';
import SelectGroupPage from './SelectGroupPage'
import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

window.api_url = "https://api.whusu.org/";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <SelectGroupPage/>
      </MuiThemeProvider>
    );
  }
}

export default App;
