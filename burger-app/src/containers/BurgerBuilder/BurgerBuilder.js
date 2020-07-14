import React, {Component} from 'react';
import Auxil from '../../hoc/Auxil';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render(){
        return(
            <Auxil>
                <div>Burger Display</div>
                <Burger/>
                <div>Build Controls</div>
            </Auxil>
        );
    }
}

export default BurgerBuilder;