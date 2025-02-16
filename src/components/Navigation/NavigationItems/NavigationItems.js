import React from 'react';

import classes from './NavigationItems.css';
import NavItem from '../NavigationItems/NavigationItem/NavigationItem';


const navItems = (props) => (
    <ul className={classes.NavigationItems}>
       <NavItem link='/' exact>Burger Builder</NavItem>
       { props.isAuthenticated ? <NavItem link='/orders'>Orders</NavItem> : null }
       { !props.isAuthenticated
        ? <NavItem link='/auth'>Authenticate</NavItem>
        : <NavItem link='/logout'>Logout</NavItem>}
    </ul>
);

export default navItems;