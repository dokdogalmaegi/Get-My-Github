import { AppBar, IconButton, makeStyles, Toolbar, Typography, Button } from '@material-ui/core';
import Home from '@material-ui/icons/Home';
import korean from '../../textJson/korea.json';
import english from '../../textJson/english.json';
import React, { useState } from 'react';

const useStyles = makeStyles({
  toolBar: {
    textAlign: 'right',
    display: 'flex',
    flexGrow: 1
  }
})

export default function Menu({ goHomeCb, selectLang, changeLang }) {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar variant="dense" className={classes.toolBar}>
        <Typography variant="h6">
          { selectLang.title }
        </Typography>
        <IconButton color="primary" component="span" onClick={ goHomeCb }>
          <Home style={{ color: 'white' }} />
        </IconButton>
        {selectLang == korean && <button onClick={ changeLang }>{ selectLang.language }</button>}
        {selectLang == english && <button onClick={ changeLang }>{ selectLang.language }</button>}
      </Toolbar>
    </AppBar>
  );
}