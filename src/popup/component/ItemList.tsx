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

      await res.json().then(msg => {
        reposLength.push(msg.length);
      });      
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
        repos(user.repos_url);

        console.log(reposLength);

        for (let idx in reposLength) {
          console.log(`idx : ${idx}`);
        }

        console.log(reposLength[0]);

        return (
          <Item src={user.avatar_url} url={user.html_url} id={user.login} reposLength={0}></Item>
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