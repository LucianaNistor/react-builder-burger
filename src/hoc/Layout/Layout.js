import React, { useState } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux';
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const layout = props => {
    const [showSideDrawer, setSideDrower] = useState(false)

    const sideDrawerClosedHandler = () => {
        setSideDrower(false)
    }
    const sideDrawerToogleHandler = () => {
        setSideDrower(!showSideDrawer)
    }
    return (
        <Aux>
            <SideDrawer
                isAuth={props.isAuthenticated}
                showSideDrawer={showSideDrawer}
                closed={sideDrawerClosedHandler}/>
            <Toolbar
                isAuth={props.isAuthenticated}
                openSidebarDrawer={sideDrawerToogleHandler} />
            <main className={classes.content}>
                {props.children}
            </main>
        </Aux>
    );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(layout);