import React, { Component } from 'react';
import { Box } from '@material-ui/core';
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

    return ( 
      <Box>
        {items.forEach(res => {
          return (
            <Item url={res.url} src={res.avatar_url} />
          )
        })}
      </Box>
    );
  }
}
 
export default ItemList;