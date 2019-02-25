import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavigationContainer from '../containers/NavigationContainer';

import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import ManualPage from '../pages/ManualPage';
import UploadPage from '../pages/UploadPage';

class App extends Component {
    render() {
        return (
           <BrowserRouter>
                <div>

                    <NavigationContainer />

                    <Switch>

                        <Route exact path="/" component={HomePage} />
                        <Route exact path='/upload' component={UploadPage} />
                        <Route exact path="/manual" component={ManualPage} />
                        <Route component={ErrorPage} />

                    </Switch>
                    
                </div>
           </BrowserRouter>
        );
    };
};

export default App;