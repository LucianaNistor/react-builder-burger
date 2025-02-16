import React from 'react';

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'

const cheCkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes good! :)</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
                <Button
                    btnType="Danger"
                    clicked={props.checkoutCancel}>CANCEL</Button>
                <Button
                    btnType="Success"
                    clicked={props.checkoutContinue}>CONTINUE</Button>
            </div>
        </div>
    )
}

export default cheCkoutSummary;