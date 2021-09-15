import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';

export default function Dropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    history.push(`/${e.target.textContent}`)
  };

  const handleStay = () =>{
    setAnchorEl(null);
  }

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleStay}
      >
        <MenuItem onClick={handleClose}>friends</MenuItem>
        <MenuItem onClick={handleClose}>chat</MenuItem>
        <MenuItem onClick={handleClose}>account</MenuItem>
      </Menu>
    </div>
  );
}