import React, {Component} from 'react';
import Item from './MarketItem';

class Inventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    };


    render() {

        return(
            <div>
                <Item count= {this.state.count}/>
                <button onClick={() => this.setState({count: this.state.count +1})}>Add 1</button>
                <button onClick={() => this.setState({count: this.state.count -1})}>Minus 1</button>
                <br></br>
                <br></br>
                <button onClick={() => this.setState({count: this.state.count *2})}>Double</button>
                <button onClick={() => this.setState({count: this.state.count /2})}>Half</button>
                <br></br>
                <br></br>
                <button onClick={() => this.setState({count: this.state.count *0})}>Clear</button>
        </div>
        );
    }
}

export default Inventory;