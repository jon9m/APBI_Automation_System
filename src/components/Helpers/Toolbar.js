import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Navigation from './Navigation';

export default class Toolbar extends Component {
    toggleActionsBodyClass() {
        document.body.classList.toggle('toolbar-actions-open');
    }

    toggleSearchBodyClass() {
        document.body.classList.toggle('toolbar-search-open');
    }

    render() {
        return (
            <div className="toolbar">
                <div className="toolbar-inner">
                    <div className="logo">
                        <img src="/img/logo.svg" alt="" />
                    </div>
                    <Navigation />

                    <ul className="bottom">
                        <li>
                            <NavLink to="/login">
                                <i className="md-icon">perm_identity</i>
                            </NavLink>
                        </li>

                        <li>
                            <a>
                                <i className="md-icon">power_settings_new</i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
