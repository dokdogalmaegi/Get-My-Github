import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React, { Component } from 'react';

export interface IconState {

}

class Icon extends Component<any, IconState> {
  render() {
    const { src, id, url, followers, following, selectLang, getResultF, followCB } = this.props;

    return (
      <Card>
        <CardActionArea component="a" target="_blank" href={url}>
          <CardMedia image={src} title="Contemplative Reptile" style={{ height: '140px' }} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {id}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{float: "right"}}>
          <Button variant="outlined" size="small" color="primary" onClick={() => {followCB('followers'); getResultF('followers'); }}>
            { selectLang.followers } {followers}
          </Button>
          <Button variant="outlined" size="small" color="primary" onClick={() => {followCB(''); getResultF('following'); }}>
            { selectLang.following } {following}
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default Icon;