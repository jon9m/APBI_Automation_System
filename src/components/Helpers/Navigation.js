import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return(
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink to="/" exact={true} activeClassName="active">
                             <i className="md-icon">dashboard</i> <span>Dashboard</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/headquarters" activeClassName="active">
                            <i className="md-icon">settings</i> <span>Portal Setting</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contacts" activeClassName="active">
                            <i className="md-icon">dvr</i> <span>Content Management</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/invoice" activeClassName="active">
                            <i className="md-icon">person_add</i> <span>User Management</span>
                            <strong>3</strong>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/projects" activeClassName="active">
                            <i className="md-icon">people_outline</i> <span>Inspectors Management</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/members" activeClassName="active">
                            <i className="md-icon">filter_none</i> <span>Bookings</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/locations" activeClassName="active">
                            <i className="md-icon">location_searching</i> <span>Locations Management</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/communication" activeClassName="active">
                            <i className="md-icon">contact_phone</i> <span>Communications</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/training" activeClassName="active">
                            <i className="md-icon">school</i> <span>Training Course</span>
                        </NavLink>
                    </li>

                    
                </ul>

                <strong>Additional Links</strong>

                <ul>
                    <li>
                        <NavLink to="/login" activeClassName="active">
                            <i className="md-icon">arrow_forward</i> <span>Login</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/icons" activeClassName="active">
                            <i className="md-icon">grid_on</i> <span>Icons</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/forms" activeClassName="active">
                            <i className="md-icon">input</i> <span>Forms</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}
