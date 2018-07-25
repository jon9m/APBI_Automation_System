import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Aux from '../../Hoc/Auxi';

export default class Navigation extends Component {

    isLinkActive = () => {
        return false;
    }

    menuExpandedItems = [];

    menuItemClickHandler = (itemId) => {
        this.menuExpandedItems = [];
        this.menuExpandedItems.push(itemId);
    }

    subMenuItemDisplayHandler = (subItemName) => {
        if (this.menuExpandedItems.indexOf(subItemName) >= 0) {
            return true;
        }
        return false;
    }

    navigationItems = [
        {
            type: "text",
            level: 1,
            id: "main_dashboard",
            title: "Dashboard",
            path: "/",
            children: [
                {
                    type: "text",
                    level: 2,
                    id: "main_dashboard",
                    title: "Main Dashboard",
                    path: "/"
                }
            ]
        },
        {
            type: "text",
            level: 1,
            id: "portal_setting",
            title: "Portal Setting",
            path: "/headquarters",
            children: [
                {
                    type: "text",
                    level: 2,
                    id: "portal_setting",
                    title: "Websites",
                    path: "/"
                },
                {
                    type: "text",
                    level: 2,
                    id: "portal_setting",
                    title: "Social Media Accounts",
                    path: "/"
                }
            ]
        }
    ];

    render() {
        const navItems = Object.keys(this.navigationItems).map((igKey) => {
            return <Aux key={igKey}>
                <li onClick={() => this.menuItemClickHandler(this.navigationItems[igKey].id)}>
                    <NavLink isActive={this.isLinkActive} to={this.navigationItems[igKey].path} exact={true} activeClassName="active">
                        <i className="md-icon">dashboard</i> <span>{this.navigationItems[igKey].title}</span>
                    </NavLink>
                </li>
                {
                    Object.keys(this.navigationItems[igKey].children).map((cKey) => {
                        return this.subMenuItemDisplayHandler(this.navigationItems[igKey].children[cKey].id) ?
                            <li key={cKey}>
                                <NavLink to="/" exact={true} activeClassName="active">
                                    <i className="sm-icon">dashboard</i> <span>{this.navigationItems[igKey].children[cKey].title}</span>
                                </NavLink>
                            </li>
                            : null
                    })
                }
            </Aux>
        });


        return (
            <div className="navigation">
                <ul>
                    {navItems}

                    {/* <li onClick={() => this.menuItemClickHandler("main_dashboard")}>
                        <NavLink isActive={this.isLinkActive} to="/" exact={true} activeClassName="active">
                            <i className="md-icon">dashboard</i> <span>Dashboard</span>
                        </NavLink>
                    </li>
                    {
                        this.subMenuItemDisplayHandler("main_dashboard") ?
                            <li>
                                <NavLink to="/" exact={true} activeClassName="active">
                                    <i className="sm-icon">dashboard</i> <span>Main Dashboard</span>
                                </NavLink>
                            </li>
                            : null
                    } */}

                    {/* <li>
                        <NavLink to="/headquarters" activeClassName="active">
                            <i className="md-icon">settings</i> <span>Portal Setting</span>
                        </NavLink>
                    </li> */}

                    <li>
                        <NavLink to="/contacts" activeClassName="active">
                            <i className="md-icon">dvr</i> <span>Content Management</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/invoice" activeClassName="active">
                            <i className="md-icon">person_add</i> <span>User Management</span>
                            <strong>6</strong>
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
