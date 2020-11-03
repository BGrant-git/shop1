import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: 5,
  },
  title: {
		flexGrow: 1,
    textAlign: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{boxShadow: 'none'}}>
        <Toolbar>          
          <Typography variant="body2" className={classes.title}>
            Made by Ben G <br />
						All products are fabricated and info from H&M used
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Footer