import React, { useState, useEffect } from 'react';
import { getFriends } from '../../requests';
import { InputLabel, MenuItem, FormControl, Select, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { changeFriend } from '../../actions';


const FriendDropdown = ({chosenFriend, setChosenFriend}) => {
    const [friends, setFriends] = useState([])
    const dispatch = useDispatch()
    useEffect(async()=>{
        const friendsList = await getFriends(localStorage.getItem('user_id'))
        setFriends(friendsList)
        console.log(friendsList);
    }, [])


    const [friend, setFriend] = useState('');
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        let chosen = event.target.value;
        setFriend(chosen);
        setChosenFriend(chosen);
        localStorage.setItem('chosen_friend', chosen)
        dispatch(changeFriend(chosen))
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const formStyle = {
        margin:"20px",
        "minWidth":"120px"
    }

    const friendItems = friends.map((item, idx) => <MenuItem value={item.id} key={idx}>{item.first_name} {item.last_name}</MenuItem>)

    return (
        <div>
        <FormControl style={formStyle}>
            <InputLabel id="demo-controlled-open-select-label">Friend</InputLabel>
            <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={friend}
            label="Age"
            onChange={handleChange}
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {friendItems}
            </Select>
        </FormControl>
        </div>
    );
}

export default FriendDropdown