import React from 'react';
import { Nav } from '../../layout'

const Dashboard = ({socket}) => {
    return (
        <>
        <Nav socket = {socket}/>
        </>
    )
}

export default Dashboard;