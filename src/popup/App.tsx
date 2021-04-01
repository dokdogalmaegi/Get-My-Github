import React, { Component } from "react";
import { Box } from '@material-ui/core';
import Menu from './component/Menu';
import Form from './component/Form';
import Icon from "./component/Icon";
import ItemList from './component/ItemList';
import "./App.scss";

enum DisplayType {
  Followers = "FOLLOWERS",
  Following = "FOLLWING",
}

interface AppState {
  result : any,
  displayType : DisplayType,
  callBackUrl : string
}

class App extends Component<any, AppState> {
  constructor(props) {
    super(props);

    this.state = { result : '', displayType : null, callBackUrl : null};
  }

  Searchcb = (url) => {
    fetch(url)
    .then(async (res) => {
      if(!res.ok) {
        throw new Error("404 not found");
      }

      let resultJson = await res.json();
      this.setState({
        result : resultJson,
        callBackUrl : url
      });

    }).catch((e) => {
      alert(e);
    })
  }

  followersSearchCb = () => {
    const { callBackUrl : url } = this.state;
    console.log(`${url}/followers`);
    fetch(`${url}/followers`)
    .then(async (res) => {
      if(!res.ok) {
        throw new Error("404 not found");
      }

      let resultJson = await res.json();
      this.setState({
        result : resultJson
      });
    }).catch((e) => {
      alert(e);
    });
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
    const { Searchcb, handleFollowersCb, handleFollowingCb, followersSearchCb } = this;
    const { result, displayType } = this.state;
    
    return (
      <Box width="400px" height="350px">
        <Menu />
        {!displayType && 
          <Box>
          <Form getResult={Searchcb} />
          {
            result != '' ? <Icon src={result.avatar_url} id={result.login} url={result.html_url} followers={result.followers} following={result.following} follwersCB={handleFollowersCb} followingCB={handleFollowingCb} getResultF={followersSearchCb} /> : <div />
          }
          </Box>
        }
        {displayType == DisplayType.Followers && 
          <ItemList items={result} ></ItemList>
        }
        {displayType == DisplayType.Following && <h1>test2</h1>}
      </Box>
    );
  }
}

export default App;
