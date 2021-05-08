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
  Default = "DEFAULT"
}

interface AppState {
  result : any,
  resultF : any,
  displayType : DisplayType,
  callBackUrl : string,
  foundFg : Boolean
}

class App extends Component<any, AppState> {
  constructor(props) {
    super(props);

    this.state = { result : '', resultF : null, displayType : DisplayType.Default, callBackUrl : null, foundFg : false };
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
        callBackUrl : url,
        foundFg : false
      });

    }).catch((e) => {
      alert(e);
      this.setState({
        foundFg : true
      });
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
    this.setState({
      displayType : DisplayType.Default
    });
  }

  handleFollowCb = (type) => {
    (type == 'followers') ?
    this.setState({
      displayType : DisplayType.Followers
    }) :
    this.setState({
      displayType : DisplayType.Following
    });
  }

  render() {
    const { Searchcb, followSearchCb, handleFollowCb, handleHomeCb } = this;
    const { result, displayType, resultF, foundFg } = this.state;
    
    return (
      <Box width="400px" height="350px">
        <Menu goHomeCb={handleHomeCb} />
        {displayType == DisplayType.Default && 
          <Box>
          <Form getResult={Searchcb} />
          {
            result != '' && !foundFg ? <Icon src={result.avatar_url} id={result.login} url={result.html_url} followers={result.followers} following={result.following} followCB={handleFollowCb} getResultF={followSearchCb} /> : (foundFg) ? <img src="notFound.png" alt="404_not_found_image" width="400px" height="350px" /> : <div />
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
