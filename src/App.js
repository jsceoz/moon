import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginPage from './LoginPage';
import MainPage from './Main';
import GroupListPage from './GroupListPage';
import SelectGroupPage from './SelectGroupPage';
import ItemContent from './ItemContentPage';
import {indigo500, indigo700 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Router, Route, hashHistory} from 'react-router';
import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

window.api_url = "https://api.whusu.org/";

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: indigo500,
        primary2Color: indigo700,
    },
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Router history={hashHistory}>
                    <Route path="/home/:activity_id" component={MainPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/select-group" component={SelectGroupPage}/>
                    <Route path="/group-list/:group_id" component={GroupListPage}/>
                    <Route path="/item-content/:item_id" component={ItemContent}/>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
