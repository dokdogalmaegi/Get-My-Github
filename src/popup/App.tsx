import React, { Component } from "react";
import { Box, Button, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import Form from './component/Form';
import "./App.scss";

interface AppState {
  name: string;
  age: number;
}

class App extends Component<any, AppState> {

  state = { name: 'hong-gil-dong', age: 16 };

  render() {
    const { name, age } = this.state;

    chrome.identity.getProfileUserInfo((userInfo) => {
      chrome.runtime.sendMessage({userInfo});
    })

    return (
      <Box width="400px" height="350px">
        <AppBar position="static">
          <Toolbar variant="dense" style={{textAlign: 'right'}}>
            <Typography variant="h6">
              News
            </Typography>
          </Toolbar>
        </AppBar>
        <Form>

        </Form>
      </Box>
    );
  }
}

export default App;
