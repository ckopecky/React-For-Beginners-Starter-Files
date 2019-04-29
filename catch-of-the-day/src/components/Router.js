import {BrowserRouter, Route, Switch} from 'react-router-dom';


import React from 'react';
import App from './App';
import StorePicker from './StorePicker';
import FourOhFour from './FourOhFour';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={StorePicker} />
                <Route exact path="/store/:id" component={App} />
                <Route component={FourOhFour} />

            </Switch>
        </BrowserRouter>
    );
};

export default Router;