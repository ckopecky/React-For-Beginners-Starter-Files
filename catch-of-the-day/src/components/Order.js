import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Order extends Component {

    renderOrder = key => {
        console.log("fish", key);
        const currentFish = this.props.fishes[key];
        const qty = this.props.order[key];
        console.log("currentFish", currentFish);
        const isAvailable = currentFish && currentFish.status === "available";
        return isAvailable ? 
        <li key={key}>
            {qty} lbs {currentFish.name}
            {formatPrice(qty * currentFish.price)}
        </li>
        :
        <li key={key}>
            Sorry {currentFish ? currentFish.name : "fish"} is no longer available!
        </li>
    }
    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((accumulator, key) => {
            const fish = this.props.fishes[key];
            const qty = this.props.order[key];
            const available = fish && fish.status;
            if(available){
                return accumulator + (qty * fish.price);
            }
            return accumulator;
        }, 0);
        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <ul>
                    {orderIds.map(this.renderOrder)}
                </ul>
                <div className="total">
                    Total:
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        );
    }
}

export default Order;