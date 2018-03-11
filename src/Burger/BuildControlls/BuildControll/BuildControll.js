import React, {Component} from 'react';
import classes from './BuildControll.css';

const buildControll = (props) => (

    <div className={classes.BuildControll}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className={classes.More} onClick={props.added}>More</button>
    </div>

);
export default buildControll;