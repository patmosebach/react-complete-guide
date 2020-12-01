import React, { Component } from 'react';
import Auxil from '../Auxil/Auxil';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{

    state = {
        showDrawer: false
    }

    closeDrawer = () => {
        this.setState({showDrawer: false});
    }

    openDrawer = () => {
        this.setState({showDrawer: true});
    }

    render(){
        return(
            <Auxil>
                <Toolbar openSideDrawer={ this.openDrawer }/>
                { this.state.showDrawer ? <SideDrawer open close={this.closeDrawer}/> : null }
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxil>
        )
    }
};

export default Layout;