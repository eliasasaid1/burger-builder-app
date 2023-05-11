import React, { Component } from 'react';
import Aux from '../../../hoc/AuxFolder/ReactAux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate(){
        console.log('[OrderSummary] Will Update');
    }
    render(){
        const ingredientSummary = Object
        .keys(this.props.ingredients)
        .map(x => {
            return <li key={x}>
                <span
                    style={{
                        textTransform: 'capitalize'
                    }}>{x}</span>: {this.props.ingredients[x]}</li>
        });
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A Delicous burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price : {this.props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
    }
}
export default OrderSummary;