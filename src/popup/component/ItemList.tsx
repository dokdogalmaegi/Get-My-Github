import React, { Component } from 'react';
import { Box } from '@material-ui/core';
 
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

      </Box>
    );
  }
}
 
export default ItemList;