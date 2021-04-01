import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React, { Component } from 'react';

export default function Item( {src, url, id}) {
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
      <CardActions style={{ float: "right" }}>
      </CardActions>
    </Card>
  )
};