import React, {Component} from 'react';
import classes from './BuildControlls.css';
import BuildControll from './BuildControll/BuildControll';

const controlls = [
    {label:'Salad', type: 'salad'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'}
];
const buildControlls = (props) => (
    <div className={classes.BuildControlls}>
        <p>Price:{props.price.toFixed(2)}</p>
        {controlls.map((ctrl) => (
            <BuildControll
                key={ctrl.label}
                label={ctrl.label}
                added={()=>props.ingAdded(ctrl.type)}
                removed={() => props.ingRemove(ctrl.type)}
                disabled ={props.disabled[ctrl.type]}
            />
        ))}
        <button disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>

    </div>

);
export default buildControlls;