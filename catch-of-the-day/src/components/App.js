import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import fishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    componentDidMount(){
        //hooks into the second the app is loaded onto page
        const { id } = this.props.match.params
        const localStorageRef = localStorage.getItem(id);
        if(localStorageRef){
            this.setState({order: JSON.parse(localStorageRef)})
        }
        // console.log("mounted!");
        this.ref = base.syncState(`${this.props.match.params.id}/fishes`, { context: this, state: 'fishes'})
    }

    componentDidUpdate(){
        // console.log(this.state.order);
        const { id } = this.props.match.params
        localStorage.setItem(id, JSON.stringify(this.state.order));
        //not called in the initial render. Updates when someone modifies order
        // console.log("updated!");
    }

    componentWillUnmount(){
        base.removeBinding(this.ref); //this will prevent memory leaks when multiple stores are created. Basically closes one instance of the store before it opens another. 
    }

    addFish = (fish) => {
        //1. take a copy of the existing state
        const fishes = {...this.state.fishes}; //takes a copy of state
        //2. Add new fish to fishes var
        fishes[`fish${Date.now()}`] = fish;
        this.setState({fishes});
    };

    updateFish = (fish, updatedFish) => {
        //take a copy of current state
        const fishes = {...this.state.fishes}
        //update that state
        fishes[fish] = updatedFish;
        //set that to state
        this.setState({ fishes });
    }

    deleteFish = (fish) => {
        //1. take a copy of state
        const fishes = {...this.state.fishes}
        //2. set fish we don't want to null
        fishes[fish] = null;
        //3. update state
        this.setState({ fishes });

    }

    loadSamples = () => {   
        this.setState({fishes:fishes});
    }

    addToOrder = (key) => {
        //copy of state
        const order = {...this.state.order}; //takes a copy of order state
        //add to the order or update the number in our order
        order[key] = order[key] + 1 || 1;
        //call setState to update our state object
        this.setState({order});
    }

    removeFromOrder = (key) => {
        const order = {...this.state.order};
        //1. take a copy of state
        delete order[key];
        //2. remove that item from order
        this.setState({ order })
        //3. set State
    }

    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header slug="Fresh Seafood Market"/>
                    <ul className="fishes">
                        {
                            Object.keys(this.state.fishes).map(fish => {
                                return(
                                    <Fish key={fish} index={fish} details={this.state.fishes[fish]} addToOrder={this.addToOrder}/>
                                )
                            })

                        }
                    </ul>
                </div>
                {/* <Order {...this.state} /> would also work as long as state doesn't have properties added. Only pass data down that you explicitly need.  */}
                <Order 
                    fishes={this.state.fishes} 
                    order={this.state.order} 
                    removeFromOrder={this.removeFromOrder}
                />
                <Inventory 
                    addFish = {this.addFish} 
                    updateFish={this.updateFish} 
                    deleteFish={this.deleteFish} 
                    loadSamples= {this.loadSamples} 
                    fishes={this.state.fishes}
                />
            </div>
        )
    }
}

export default App;