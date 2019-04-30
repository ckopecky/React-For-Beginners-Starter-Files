import React from 'react';
import PropTypes from "prop-types";

const Header = (props) => {
    return (
        <header className="top">
                <h1>Catch 
                    <span className="ofThe">
                        <span className="of">
                        Of
                        </span>
                        <span>
                        The
                        </span>
                    </span> 
                    Day
                </h1>
                <h3 className="tagline">
                    <span>{props.slug}</span>
                </h3>
            </header>
    );
};

//proptypes are developer helpers == they don't go to production. 
Header.propTypes = {
    slug: PropTypes.string.isRequired
}

export default Header;