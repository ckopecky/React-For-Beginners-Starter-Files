import React, { Component } from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends Component {
    render() {
        return (
            <div className="inventory">
                {Object.keys(this.props.fishes).map(key => <EditFishForm index = {key} key={key} updateFish={this.props.updateFish} deleteFish={this.props.deleteFish} fish={this.props.fishes[key]}/>)}
                <AddFishForm addFish ={this.props.addFish}/>
                <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
            </div>
        );
    }
}

export default Inventory;