import React, { Component } from 'react';

//react material을 추가하기 위한 부분
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//component 구간
import DashBoard from './dashboard';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <DashBoard/>
      </MuiThemeProvider>
    );
  }
}
