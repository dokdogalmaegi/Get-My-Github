import React, { Component } from "react";
import { Box, LinearProgress } from '@material-ui/core';
import Menu from './component/Menu';
import Form from './component/Form';
import Icon from "./component/Icon";
import ItemList from './component/ItemList';
import "./App.scss";

enum DisplayType {
  Followers = "FOLLOWERS",
  Following = "FOLLWING",
  default = "DEFAULT"
}

interface AppState {
  result : any,
  resultF : any,
  displayType : DisplayType,
  callBackUrl : string
}

class App extends Component<any, AppState> {
  constructor(props) {
    super(props);

    this.state = { result : '', resultF : null, displayType : DisplayType.default, callBackUrl : null};
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

  followSearchCb = (type) => {
    const { callBackUrl : url } = this.state;

    (type == 'followers') ? 
    fetch(`${url}/followers`)
    .then(async (res) => {
      if(!res.ok) {
        throw new Error("404 not found");
      }

      let resultJson = await res.json();
      this.setState({
        resultF : resultJson
      });
    }).catch((e) => {
      alert(e);
    }) :
    fetch(`${url}/following`)
    .then(async (res) => {
      if(!res.ok) {
        throw new Error("404 not found");
      }

      let resultJson = await res.json();
      this.setState({
        resultF : resultJson
      });
    }).catch((e) => {
      alert(e);
    });
  }

  handleHomeCb = () => {
    console.log('test');

    this.setState({
      displayType : DisplayType.default
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
    const { Searchcb, handleFollowersCb, handleFollowingCb, followSearchCb, handleHomeCb } = this;
    const { result, displayType, resultF } = this.state;
    
    return (
      <Box width="400px" height="350px">
        <Menu goHomeCb={handleHomeCb} />
        {displayType == DisplayType.default && 
          <Box>
          <Form getResult={Searchcb} />
          {
            result != '' ? <Icon src={result.avatar_url} id={result.login} url={result.html_url} followers={result.followers} following={result.following} follwersCB={handleFollowersCb} followingCB={handleFollowingCb} getResultF={followSearchCb} /> : <div />
          }
          </Box>
        }
        {displayType == DisplayType.Followers &&
          <ItemList items={resultF} ></ItemList> 
        }
        {displayType == DisplayType.Following &&
          <ItemList items={resultF} ></ItemList> 
        }
      </Box>
    );
  }
}

export default App;
