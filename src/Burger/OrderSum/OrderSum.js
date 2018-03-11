import React, {Component} from 'react';
import Auxx from '../../hoc/Auxx';
import Button from '../../components/UI/Button/Button';
const orderSum = (props) => {
    const ingredientSum = Object.keys( props.ingredients ).map(ingKey =>{
        return <li key={ingKey}><span style={{textTransform: 'capitalize'}}>{ingKey}</span> : {props.ingredients[ingKey]}</li>
    });
    return(
        <Auxx>
            <h2>your order</h2>
            <ul>
                {ingredientSum}
            </ul>
            <p>Total price: {props.price}</p>
            <p>Continue to checkout</p>
            <Button btnType="Success" clicked={props.puchaseContinue}>Continue</Button>
            <Button btnType='Danger' clicked={props.purchaseCancel}>Cancel</Button>
        </Auxx>
    )

};
export default orderSum;