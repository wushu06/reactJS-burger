import React, {Component} from 'react';
import Auxx from '../../hoc/Auxx';
import Burger from '../../Burger/Burger';
import BuildControlls from '../../Burger/BuildControlls/BuildControlls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSum from '../../Burger/OrderSum/OrderSum';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 1,
    meat: 2
}
class BurgerBuilder extends Component {

    state = {
        ingredients : null,
        totalPrice: 3,
        purchsable: false,
        purchasing: false,
        loading: false,
        error: false
    };

    componentDidMount() {
        axios.get('https://burger-10e18.firebaseio.com/Ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data})
            })
            .catch( error =>
                {this.setState({error: true})
            });
    }

    purchaseHandle =() => {
        this.setState({ purchasing: true });
    }
    cancelPurchase = () => {
        this.setState({purchasing: false})
    }
    continuePurchase = () => {
        //alert('Continue ');
      /*  this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Noureddine',
                address: {
                    street: '44'
                },
                email: 'nour@g.com'
            },
            delivery: 'next day'
        }
        axios.post('/order', order)
            .then(response =>{
                this.setState({loading: false, purchasing: false});
            })
            .catch(error => {
                this.setState({loading: false, purchasing: false});
            });*/
      // this.props.history.push('/checkout');
        let queryParams = [];
        for (let i in this.state.ingredients ) {
            queryParams.push(encodeURIComponent(i)+ '=' + encodeURIComponent(this.state.ingredients[i]) );

        }
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search : '?'+queryString
        })
    }

    updatePurchaseState (ingredients) {

        const sum = Object.keys(ingredients).map(ingKey => {
            return ingredients[ingKey];
        })
            .reduce((sum, el)=>{
                return sum + el;
            },0);
        this.setState({purchsable: sum > 0});
    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);

    };
    removeIngredientHandler = (type) => {
        const currentCount = this.state.ingredients[type];
        if(currentCount <= 0 ){
            return;
        }
        const updateCount = currentCount -1;
        const updatedIngredient = {
            ... this.state.ingredients
        };
        updatedIngredient[type] = updateCount;
        const dedactedPrice = INGREDIENT_PRICES[type];
        const currentPrice = this.state.totalPrice;
        const newPrice = currentCount - dedactedPrice;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredient});
        this.updatePurchaseState(updatedIngredient);

    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients // meaning copy the state
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
            //meaning if the keys of array (salad, meat ..) will be equal to true or false depending on comparison
        };
        let orderSum = null;


        let burger = this.state.error ? <p>cant load ingredients</p> : <Spinner/>;
        if (this.state.ingredients) {
             burger =
                (
                    <Auxx>
                        <Burger ing={this.state.ingredients}/>
                        <BuildControlls
                            price = {this.state.totalPrice}
                            ingAdded = {this.addIngredientHandler}
                            ingRemove = {this.removeIngredientHandler}
                            purchasable = {this.state.purchsable}
                            ordered= {this.purchaseHandle}
                            disabled = {disabledInfo}
                        />
                    </Auxx>
                );
             orderSum =
                 <OrderSum
                 ingredients={this.state.ingredients}
                 purchaseCancel={this.cancelPurchase}
                 puchaseContinue={this.continuePurchase}
                 price={this.state.totalPrice}

                />;

        }
        if(this.state.loading) {
            orderSum = <Spinner />;
        }


        return (

          <Auxx>
              <Modal show={this.state.purchasing} closeModal={this.cancelPurchase}>
                  {orderSum}

              </Modal>
              {burger}
          </Auxx>
        );

    }
}

export default ErrorHandler( BurgerBuilder, axios );