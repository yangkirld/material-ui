import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default function HelperTextAligned() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField
        helperText="Please enter your name"
        label="Name"
        variant="standard"
      />
      <TextField helperText=" " label="Name" variant="standard" />
    </div>
  );
}
