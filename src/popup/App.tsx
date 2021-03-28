import React, { Component } from "react";
import { Box, AppBar, Toolbar, Typography } from '@material-ui/core';
import Menu from './component/Menu';
import Form from './component/Form';
import Icon from "./component/Icon"
import "./App.scss";

interface AppState {
  result : any,
  followersLoad : boolean,
  followingLoad : boolean
}

class App extends Component<any, AppState> {
  constructor(props) {
    super(props);

    this.state = { result : '', followersLoad : false, followingLoad : false };
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

  handleCb = () => {
    this.setState({
      followersLoad : true
    });

    console.log(this.state.followersLoad);
  }

  render() {
    const { cb, handleCb } = this;
    const { result, followersLoad, followingLoad } = this.state;

    return (
      <Box width="400px" height="350px">
        <Menu />
        {!followersLoad || !followingLoad ? 
          <Box>
          <Form getResult={cb} />
          {
            result != '' ? <Icon src={result.avatar_url} id={result.login} url={result.html_url} followers={result.followers} following={result.following} testCb={handleCb} /> : <div />
          }
          </Box>
          : (
          <h1>test</h1>
        )};
      </Box>
    );
  }
}

export default App;
