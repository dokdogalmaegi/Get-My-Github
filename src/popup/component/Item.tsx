import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React, { Component } from 'react';

export default function Item( {src, url }) {
  return (
    <Card>
      <CardActionArea component="a" target="_blank" href={url}>
        <CardMedia image={src} title="Contemplative Reptile" style={{ height: '140px' }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            test Text
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ float: "right" }}>
        <Button variant="outlined" size="small" color="primary">
          followers
          </Button>
        <Button variant="outlined" size="small" color="primary">
          following
          </Button>
      </CardActions>
    </Card>
  )
};