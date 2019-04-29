import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();
    //sibling elements need to bave one parent component. 
    //React.Fragment allows for grouping things together without creating a dummy div
    //comments in JSX are in curly brackets and must be inside returned element.
    handleClick(){
        console.log("Heyyyyy");
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        //1. Stop the form from submitting to a default
        //2. get the text from that input (ref)
            //submit PR to change code to current.value as opposed to value.value (which is what it is in video)
        const store = this.myInput.current.value;
        //3. push to another page
            // because StorePicker is a child of Router --- we have some methods that we have available to us. 
        this.props.history.push(`/store/${store}`);

        
    }    
    
    render(){
        return (
            <form onSubmit={this.handleSubmit} className="store-selector">
                {/* comment - this is a store picker! */}
                <h2>Please Enter a Store:</h2>
                {/* defaultValue needs to be used when not utlizing state */}
                <input ref={this.myInput} type="text"required placeholder="Store Name" defaultValue={getFunName()}/>
                <button onClick={this.handleClick} type="submit">Visit Store</button>
            </form>
            
        )
    }
}
export default StorePicker;