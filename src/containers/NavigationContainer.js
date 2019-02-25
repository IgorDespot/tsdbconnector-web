import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavigationContainer extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-right">

                <NavLink className="navbar-brand" to="/">TSDB Connector</NavLink>

                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    
                    <span className="navbar-toggler-icon"></span>

                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav ml-auto">
                    
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/">Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/upload">Upload</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/manual">Manual</NavLink>
                        </li>

                    </ul>

                </div>

            </nav>
        );
    }
};

export default NavigationContainer;