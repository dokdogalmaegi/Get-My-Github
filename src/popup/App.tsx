import React, { Component } from "react";
import { Box, AppBar, Toolbar, Typography } from '@material-ui/core';
import Form from './component/Form';
import Icon from "./component/Icon"
import "./App.scss";

interface AppState {
  result : any,
  isload : boolean
}

class App extends Component<any, AppState> {
  constructor(props) {
    super(props);

    this.state = { result : '', isload : false };
  }

  componentDidUpdate(props, state) {
    console.log(this.state.result);
  }

  cb = (url) => {
    fetch(url)
    .then(async (res) => {
      if(!res.ok) {
        throw new Error("404 not found(유저를 찾을 수 없습니다.)");
      }

      let resultJson = await res.json();
      this.setState({
        result : resultJson
      });

    }).catch((e) => {
      alert(e);
    })
  }

  render() {
    const { cb } = this;
    const { result } = this.state;

    return (
      <Box width="400px" height="350px">
        <AppBar position="static">
          <Toolbar variant="dense" style={{textAlign: 'right'}}>
            <Typography variant="h6">
              Get My Github
            </Typography>
          </Toolbar>
        </AppBar>
        <Box>
          <Form getResult={cb}>

          </Form>
          {
            result != '' ? <Icon src={result.avatar_url} id={result.login} url={result.html_url} /> : <div />
          }
        </Box>
      </Box>
    );
  }
}

export default App;
