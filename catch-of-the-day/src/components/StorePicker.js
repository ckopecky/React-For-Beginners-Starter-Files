import React from 'react';


class StorePicker extends React.Component {

    //sibling elements need to bave one parent component. 
    //React.Fragment allows for grouping things together without creating a dummy div
    //comments in JSX are in curly brackets and must be inside returned element.

    render(){
        return (
            <form className="store-selector">
                {/* comment - this is a store picker! */}
                <h2>Please Enter a Store:</h2>
                <input type="text"required placeholder="Store Name"/>
                <button type="submit">Visit Store</button>
            </form>
            
        )
    }
}
export default StorePicker;