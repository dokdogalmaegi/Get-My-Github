import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Link, Typography } from '@material-ui/core';
import React, { useState } from 'react';

export default function Item({ src, url, id, reposLength }) {
  const [reposUrl, setReposUrl] = useState(url+"?tab=repositories");

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
        <Button variant="outlined" size="small" color="primary" onClick={ () => { window.open(reposUrl, "_blank"); } }>
          repos {reposLength}
        </Button>
      </CardActions>
    </Card>
  )
};