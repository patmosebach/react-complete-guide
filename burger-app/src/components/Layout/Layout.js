import React from 'react';
import Auxil from '../../hoc/Auxil';
import classes from './Layout.css';

const layout = (props) => (
    <Auxil>
        <div>toolbar, sidedrawer, backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxil>
);

export default layout;