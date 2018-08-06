import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { actionCreators } from '../../store/actions';

class SidebarTitle extends Component {
    toggleBodyClass() {
        document.body.classList.toggle('sidebar-title-content-open');
    }

    render() {
        return (
            <h1 className="sidebar-title-wrapper">
                <div className="sidebar-title-inner" onClick={this.toggleBodyClass.bind(this)}>
                    <div className="sidebar-subtitle">Switch Workspace</div>
                    <div className="sidebar-title">System Admin</div>

                    <div className="sidebar-action">
                        <i className="md-icon">arrow_drop_down</i>
                    </div>
                </div>

                <div className="sidebar-title-content">
                    {/* <div className="sidebar-title-content-label">
                        Switch Workspace
                    </div> */}

                    <div className="sidebar-title-content-body">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search "/>
                            </div>
                        </form>
                        <ul>
                            <li onClick={() => this.props.onChangeWorkspace('apbi')}>APBI</li>
                            <li onClick={() => this.props.onChangeWorkspace('xxx')}>Leath Furniture</li>
                            <li>Grade A Investment</li>
                            <li>Desmonds Formal Wear</li>
                            <li>Dun Rite Lawn Maintenance</li>
                            <li>Red Robin Stores</li>
                            <li>Gino's Hamburgers</li>
                            <li>Wholesale Club, Inc.</li>
                        </ul>

                        {/* <div className="sidebar-title-content-body-more">
                            Show All Companies
                        </div> */}
                    </div>
                </div>
            </h1>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeWorkspace: (workspace) => (dispatch(actionCreators.initNavigationItems(workspace)))
    }
}

export default connect(null, mapDispatchToProps)(SidebarTitle);