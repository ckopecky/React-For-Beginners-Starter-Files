import React from 'react';

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

export default Header;