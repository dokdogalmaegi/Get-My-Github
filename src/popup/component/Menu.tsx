import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    toolBar: {
        textAlign: 'right'
    }
})

export default function Menu() {
    const classes = useStyles();

    return (
        <AppBar position="static">
          <Toolbar variant="dense" className={classes.toolBar}>
            <Typography variant="h6">
              Get My Github
            </Typography>
          </Toolbar>
        </AppBar>
    );
}