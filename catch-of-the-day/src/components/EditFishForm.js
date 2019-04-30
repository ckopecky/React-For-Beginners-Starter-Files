import React, { Component } from "react";
import fishes from "../sample-fishes";
import { formatPrice } from "../helpers";

class EditFishForm extends Component {

    handleChange = event => {
        //update that fish
        //1. take a copy of the current fish
        const updatedFish = {
            ...this.props.fish, [event.currentTarget.name]: event.currentTarget.value
        }
        console.log(updatedFish, "updatedFish");
        this.props.updateFish(this.props.index, updatedFish);
    }
    render() {
        const { name, price, desc, image } = this.props.fish;
        return (
            <div className="fish-edit">
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={this.handleChange}
                    value={name}
                />
                <input
                    name="price"
                    type="text"
                    placeholder="Price"
                    onChange={this.handleChange}
                    value={formatPrice(price)}
                />
                <select 
                    name="status" 
                    onChange={this.handleChange}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea
                    name="desc"
                    placeholder="Description"
                    onChange={this.handleChange}
                    value={desc}
                />
                <input
                    name="image"
                    type="text"
                    placeholder="Image"
                    onChange={this.handleChange}
                    value={image}
                />
                <button type="submit"> + Update Fish</button>
            </div>
        );
    }
}

export default EditFishForm;
