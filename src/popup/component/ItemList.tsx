import React, { Component } from 'react';
import { Box, LinearProgress } from '@material-ui/core';
import Item from './Item';

export interface ItemListState {
  result: []
}

let reposLength:Array<number> = [];

const repos = (url) => {
  fetch(url)
    .then(async (res) => {
      if (!res.ok) {
        throw new Error("404 not found");
      }

      let resultJson = await res.json();

      console.log(`resultJson.length : ${resultJson.length}`);

      await reposLength.push(resultJson.length);
    }).catch((e) => {
      alert(e);
    });
}

class ItemList extends Component<any, ItemListState> {
  constructor(props) {
    super(props);

    this.state = { result: [] };
  }

  render() {
    const { items } = this.props;

    let elem = (<LinearProgress />);
    if (items) {
      elem = items.map((user, i) => {
        // reposLength.push(1);
        repos(user.repos_url);

        console.log(`${reposLength}`);

        return (
          <Item src={user.avatar_url} url={user.html_url} id={user.login} reposLength={reposLength[i]}></Item>
        )
      })
    }


    return (
      <Box>
        {elem}
      </Box>
    );
  }
}

export default ItemList;