import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Aux from '../Hoc/Auxi';

export default class Navigations extends Component {
    render() {
        let menuItems = '';
        const subItems = this.props.subItems;
        if ((subItems == null) || (subItems.length === 0)) {
            menuItems =
                <li>
                    <NavLink to="/" activeClassName="active">
                        <i className="md-icon">dashboard</i> <span>Dashboard</span>
                    </NavLink>
                </li>
        } else {
            menuItems =
                <li>
                    <ul className="sidebar-nav-outer">
                        <i className="md-icon">dashboard</i><span>Dashboard</span>
                        <div className="sidebar-nav-action"><i className="md-icon">arrow_drop_down</i></div>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="/" exact={true} activeClassName="active">
                                <i className="md-icon">dashboard</i> <span>Dashboard</span>
                            </NavLink>
                        </li>
                    </ul>
                </li>
        }

        return (
            <Aux>
                {menuItems}
            </Aux>
        );
    }
}