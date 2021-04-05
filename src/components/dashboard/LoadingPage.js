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

export default function LoadingPage() {
  const classes = useStyles();

  return (
    <div style={{textAlign: "center"}} className="justify-content-center">
    <div className={classes.root}>
      <CircularProgress />
    </div>
    <span>Loading...</span>
    </div>
  );
}