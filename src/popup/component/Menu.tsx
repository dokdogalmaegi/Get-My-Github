import { AppBar, IconButton, makeStyles, Toolbar, Typography, Button } from '@material-ui/core';
import Home from '@material-ui/icons/Home';
import React from 'react';

const useStyles = makeStyles({
  toolBar: {
    textAlign: 'right',
    display: 'flex',
    flexGrow: 1
  }
})

export default function Menu({ goHomeCb }) {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar variant="dense" className={classes.toolBar}>
        <Typography variant="h6">
          Get My Github
        </Typography>
        <IconButton color="primary" component="span" onClick={ goHomeCb }>
          <Home style={{ color: 'white' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}