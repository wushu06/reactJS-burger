import React from 'react';

import classes from './Burger.css';
import Ingredients from './Ingredients/Ingredients';
import {withRouter} from 'react-router-dom';

const burger = (props) => {
    console.log(props);
    let transformedIngredients = Object.keys(props.ing).map(ingKey => {

        return [...Array(props.ing[ingKey])].map((_, i) => {

            return <Ingredients key={ingKey + i } type={ingKey}/>;
        }).reduce((arr, el)=>{
                return arr.concat(el)
            },[]);

    });
    //console.log( transformedIngredients);
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please put ingredients</p>
    }
  return (
      <div className={classes.Burger}>
          <Ingredients type="bread-top"/>
            {transformedIngredients}
          <Ingredients type="bread-bottom"/>
      </div>
  );
};

export default withRouter(burger);