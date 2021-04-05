import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: '',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function LoadingCard() {
  const classes = useStyles();

  return (
    <div style={{textAlign: "center", marginTop:"150px"}}>
    <div className={classes.root}>
      <CircularProgress />
    </div>
    <span>Loading...</span>
    </div>
  );
}