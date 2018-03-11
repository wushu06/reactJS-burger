import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import Burger from '../../Burger/Burger';


class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1

        }
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };
    checkoutCancelledHandler = () => {
        this.props.history.goBack();

    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()){ // of returns the value and in returns the key
            ingredients[param[0]] = +param[1];
        }
        console.log(ingredients);
        this.setState({ingredients: ingredients});
    }
    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />
                <Burger ing={this.state.ingredients}/>
            </div>
        )
    }

}


export default Checkout;