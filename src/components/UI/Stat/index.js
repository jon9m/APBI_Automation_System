import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Stat extends Component {
    render() {
        return (
            <div className="stat-item">
                <Link to={this.props.path}>
                    {this.props.value ? <div className="stat-item-value">{this.props.value}</div> : ''}
                    {this.props.title ? <div className="stat-item-title">{this.props.title}</div> : ''}
                    {this.props.subtitle ? <div className="stat-item-subtitle">{this.props.subtitle}</div> : ''}
                    {this.props.label ? <div className={this.props.labelClass ? this.props.labelClass + ' stat-item-label' : 'stat-item-label'}>{this.props.label}</div> : ''}
                </Link>
            </div>
        );
    }
}

Stat.propTypes = {
    value: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    label: PropTypes.string
}

export class StatsWrapper extends Component {
    render() {
        return (
            <div className="stats-wrapper">
                {this.props.children}
            </div>
        )
    }
}

StatsWrapper.propTypes = {
    children: PropTypes.node.isRequired
}
