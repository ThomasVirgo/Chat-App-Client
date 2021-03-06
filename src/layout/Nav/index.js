import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { Dropdown } from '../../components';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({socket}) {
  const classes = useStyles();
  const history = useHistory()

  function handleLogout(){
      localStorage.clear()
      socket.disconnect()
      history.push('/login')
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Dropdown />
          <Typography variant="h6" className={classes.title}>
            You're logged in as {localStorage.getItem('first_name')}
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}