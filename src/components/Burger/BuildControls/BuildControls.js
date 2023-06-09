import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const controls = [
  {label : 'Salad',type:'salad'},
  {label : 'Bacon',type:'bacon'},
  {label : 'Cheese',type:'cheese'},
  {label : 'Meat',type:'meat'}
];
const buildControls = (props) => (
    <div className={classes.BuildControls}>
    <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(x => (<BuildControl 
        added={() => props.ingredientAdded(x.type)} 
        removed={() => props.ingredientRemoved(x.type)}  
        label={x.label} 
        key={x.label}
        disabled = {props.disabled[x.type]}  />))}
        <button
        onClick={props.ordered}
        disabled={!props.purchasable} 
        className={classes.OrderButton}>ORDER NOW</button>
    </div>
)

export default buildControls;