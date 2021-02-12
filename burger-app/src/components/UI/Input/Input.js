import React from 'react';
import classes from './Input.css';

const input = (props) => {

    let inputElement = null;
    const inputClasses = [classes.InputElement];

    let error = null;

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid);
        error = "Please input a valid " + props.elementConfig.placeholder;
    }

    switch(props.elementType){
        case('input'):
            inputElement = <input 
                                className={inputClasses.join(' ')} 
                                {...props.elementConfig} 
                                value={props.value}
                                onChange={props.changed}/>;
            break;
        case('textarea'):
            inputElement = <textarea 
                                className={inputClasses.join(' ')} 
                                {...props.elementConfig} 
                                value={props.value} 
                                onChange={props.changed}/>;
            break;
        case('select'):
            inputElement = (<select
                                className={inputClasses.join(' ')}
                                value={props.value}
                                onChange={props.changed}>
                                {props.elementConfig.options.map(option => (
                                    <option 
                                        key={option.value}
                                        value={option.value}>
                                        {option.displayValue}
                                    </option>
                                ))}
                            </select>);
            break;
        default:
            inputElement = <input 
                                className={inputClasses.join(' ')} 
                                {...props.elementConfig} 
                                value={props.value} />;

    }

    return(
        <div>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            <p className={classes.ErrorMessage}>{error ? error : null}</p>
        </div>
    );

};

export default input;