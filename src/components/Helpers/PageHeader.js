import React, { Component } from 'react';

export default class PageHeader extends Component {
    render() {
        return (
          <div className="page-header">
              <div className="page-header-inner">
                  <div className="page-header-content">
                      <h1>Australian Property & Building Inspections</h1>

                      {/* <div className="page-header-info">
                          <span>Redux Boilerplate <br/>Implemented</span>
                      </div> */}
                  </div>
              </div>
          </div>
        );
    }
}
