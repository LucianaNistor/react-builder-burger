import React from 'react'

import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement]

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid)
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                { ...props.elementConfig}
                value={props.value} 
                onChange={props.changed}/>
            break;

        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                { ...props.elementConfig }
                value={props.value}
                onChange={props.changed}/>
            break;
        case ('select'):
            inputElement = (
                <select
                    className={classes.InputElement}
                    value={props.value}
                    onChange={props.changed}
                >
                    {props.elementConfig.options.map(option => (
                        <option key={option.key} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            )
            break;
        default: 
            inputElement = <input
            className={classes.InputElement}
                { ...props.elementConfig }
                value={props.value}
                onChange={props.changed}
                />
    }
    let validationError = null;
    if (props.invalid && props.touched) {
        validationError = <p>Please add a valid value!</p>
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            { inputElement }
            { validationError }
        </div>
    )
}

export default input;