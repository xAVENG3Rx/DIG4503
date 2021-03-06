import React from 'react';

function Item (props) {

    return (
        <div>
        <h1>Advanced Counter</h1>
          <h2>Counter: {props.count}</h2>  
        </div>
    );
}

export default Item;