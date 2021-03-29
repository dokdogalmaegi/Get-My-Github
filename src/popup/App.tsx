import React, { Component } from "react";
import { Box } from '@material-ui/core';
import Menu from './component/Menu';
import Form from './component/Form';
import Icon from "./component/Icon"
import "./App.scss";

enum DisplayType {
  Followers = "FOLLOWERS",
  Following = "FOLLWING",
}

interface AppState {
  result : any,
  displayType : DisplayType
}

class App extends Component<any, AppState> {
  constructor(props) {
    super(props);

    this.state = { result : '', displayType : null };
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

  handleFollowersCb = () => {
    this.setState({
      displayType : DisplayType.Followers
    });
  }

  handleFollowingCb = () => {
    this.setState({
      displayType : DisplayType.Following
    });
  }

  render() {
    const { cb, handleFollowersCb, handleFollowingCb } = this;
    const { result, displayType } = this.state;
    
    return (
      <Box width="400px" height="350px">
        <Menu />
        {!displayType && 
          <Box>
          <Form getResult={cb} />
          {
            result != '' ? <Icon src={result.avatar_url} id={result.login} url={result.html_url} followers={result.followers} following={result.following} follwersCB={handleFollowersCb} followingCB={handleFollowingCb} /> : <div />
          }
          </Box>
        }
        {displayType == DisplayType.Followers && <h1>test1</h1>}
        {displayType == DisplayType.Following && <h1>test2</h1>}
      </Box>
    );
  }
}

export default App;
