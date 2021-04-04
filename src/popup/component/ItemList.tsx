import React, { Component } from 'react';
import { Box, LinearProgress } from '@material-ui/core';
import Item from './Item';

export interface ItemListState {
  result: any,
  isLoaded: boolean
}

const repos = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("404 not found");
  }
  return (await res.json()).length;
}

class ItemList extends Component<any, ItemListState> {
  constructor(props) {
    super(props);

    this.state = { result: [], isLoaded: false };
  }

  componentDidUpdate() {
    const { items } = this.props;
    if (this.state.isLoaded) return;
    if (items) {
      Promise.all(items.map(async (user, i) => {
        const reposLength = await repos(user.repos_url);

        return (
          <Item src={user.avatar_url} url={user.html_url} id={user.login} reposLength={reposLength}></Item>
        )
      })).then((result) => {
        console.log(result);
        this.setState({result: result, isLoaded: true});
      });
    }
  }

  render() {
    if(this.state.isLoaded) {
      return (
        <Box>
          {this.state.result}
        </Box>
      );
    } else {
      return (
        <Box>
          <LinearProgress/>
        </Box>
      )
    }
  }
}

export default ItemList;