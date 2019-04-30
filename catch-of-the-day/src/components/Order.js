import React, { Component } from 'react';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Order extends Component {

    renderOrder = key => {
        console.log("fish", key);
        const currentFish = this.props.fishes[key];
        const qty = this.props.order[key];
        console.log("currentFish", currentFish);
        const isAvailable = currentFish && currentFish.status === "available";

        const transitionOptions = (className, key) => {
            const transObj = {
                transitionAppear: true,
                classNames: className,
                key,
                timeout: {enter: 500, exit: 500}
            }
            return transObj;
        }
        if(!currentFish){
            return null;
        }
        return isAvailable ? 
        <CSSTransition {...transitionOptions("order", key)}>
            <li key={key}>
                <span>
                    <TransitionGroup component="span" className="count" transitionAppear={true}>
                        <CSSTransition 
                            {...transitionOptions("count", key)}
                        >
                            <span>{qty}</span>
                        </CSSTransition>
                    </TransitionGroup>
                    lbs {currentFish.name}
                    {formatPrice(qty * currentFish.price)}
                    {/* add an update qty button */}
                    <button 
                        onClick={()=> this.props.removeFromOrder(key)}>
                        &times;
                    </button>
                </span>
            </li>
        </CSSTransition>

        :
        <CSSTransition 
            {...transitionOptions("order", key)}
        >
            <li key={key}>
                Sorry {currentFish ? currentFish.name : "fish"} is no longer available!
            </li>
        </CSSTransition>

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
                <TransitionGroup component="ul" className="order">
                    {orderIds.map(this.renderOrder)}
                </TransitionGroup>
                <div className="total">
                    Total:
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        );
    }
}

export default Order;