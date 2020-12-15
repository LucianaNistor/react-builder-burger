import React from 'react';
// import { withRouter } from 'react-router-dom';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css';

const burger = (props) => {
    let transformedIndredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, [])
    if (transformedIndredients.length === 0) {
        transformedIndredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIndredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
}

// export default withRouter(burger);
export default burger;