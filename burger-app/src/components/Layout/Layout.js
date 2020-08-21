import React from 'react';
import Auxil from '../../hoc/Auxil';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Auxil>
        <Toolbar/>
        <div>toolbar, sidedrawer, backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxil>
);

export default layout;