import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  submitBtn: {
    float: 'right',
    marginTop: '10px',
    marginLeft: '10px'
  }
});

export default function ButtonCom({ selectLang }) {
  const classes = useStyles();

  return ( 
    <Button type='submit' variant="contained" className={ classes.submitBtn }>{ selectLang.search }</Button>
  );
}