import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div onClick={props.click} className={classes.Logo}>
        <img src={burgerLogo} />
    </div>
);

export default logo;