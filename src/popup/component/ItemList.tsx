import React, { Component } from 'react';
import { Box, LinearProgress } from '@material-ui/core';
import Item from './Item';
 
export interface ItemListState {
  result : []
}
 
class ItemList extends Component<any, ItemListState> {
  constructor(props) {
    super(props);

    this.state = { result : [] };
  }

  render() { 
    const { items } = this.props;
    
    // for(let i = 0; i < items.length; i ++) {
    //   console.log(items[0].avatar_url);
    // }
    console.log(items)
    let elem = (<LinearProgress/>);
    if(items) {
      elem = items.map((user, i) => {
        console.log(user);
        return(
          <Item src={user.avatar_url} url={user.html_url} id={user.login}></Item>
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