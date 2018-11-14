import React, { Component } from 'react';
import ReactTable from '../../Helpers/ReactTable';
import { connect } from 'react-redux';

import Spinner from '../../Helpers/Spinner/Spinner';
import { actionCreators } from '../../../store/actions';

class NewBookings extends Component {

    componentDidMount() {
        this.props.loadNewBookings();
    }

    render() {
        const columns = [
            {
                Header: 'Reference Number',
                accessor: 'Reference_Number'
            },
            {
                Header: 'Date Time',
                accessor: 'Date_Time'
            },
            {
                Header: 'Client',
                accessor: 'Client'
            },
            {
                Header: 'Client phone',
                accessor: 'Client_phone'
            },
            {
                Header: 'Property Address',
                accessor: 'Property_Address'
            },
            {
                Header: 'Building Type',
                accessor: 'Building_Type'
            },
            {
                Header: 'Building Size',
                accessor: 'Building_Size'
            },
            {
                Header: 'Inspection Type',
                accessor: 'Inspection_Type'
            }
            ,
            {
                Header: 'Payment',
                accessor: 'Payment_',
                minWidth: 120,
                Cell: props => <div>
                    <button className="button-secondary" style={{ backgroundColor: '#dd4b39', 'borderRadius': '5px' }}>$0.0 of $440.00</button>
                </div>,
                filterable: false,
                sortable : false
            },
            {
                Header: 'Status',
                accessor: 'Status_',
                minWidth: 120,
                Cell: props => <div>
                    <button className="button-secondary" style={{ backgroundColor: '#f39c12', 'borderRadius': '5px' }}>$0.0 of $440.00</button>
                </div>,
                filterable: false,
                sortable : false
            },
            {
                Header: '',
                accessor: 'a',
                minWidth: 200,
                Cell: props => <div>
                    <button className="button-facebook">n</button>&nbsp;
                    <button className="button-danger">p</button>&nbsp;
                    <button className="button-secondary">m</button>&nbsp;
                    <button className="button-danger">p</button>&nbsp;
                    <button className="button-secondary">m</button>&nbsp;
                    <button className="button-danger">p</button>&nbsp;
                    <button className="button-secondary">m</button>
                </div>,
                filterable: false,
                sortable : false
            }
        ];

        const subcolumns = [
            {
                Header: 'Date Time',
                accessor: 'Date_Time'
            },
            {
                Header: 'Status',
                accessor: 'Status',
                minWidth: 100,
                Cell: props => <div>
                    <button className="button-secondary" style={{ backgroundColor: '#dd4b39', 'borderRadius': '5px' }}>$0.0 of $440.00</button>
                </div>,
                sortable : false
            },
            {
                Header: 'Inspection Type',
                accessor: 'Inspection_Type'
            }
        ];

        let newBookings = <Spinner />;

        if (!this.props.loading) {
            newBookings = <ReactTable

                //TODO---
                getTrProps={(state, rowInfo, column, instance) => {

                    if (rowInfo) {
                        //console.log((instance));
                        return {
                            // className: 'xxx'
                            // style: {
                            //     background: (rowInfo.original.data && rowInfo.original.data.length) > 0 ? "green" : "red"
                            // }
                        };
                    }

                    return {

                    }

                }}

                data={this.props.newBookings}
                columns={columns}
                defaultPageSize={10}
                filterable
                filerColumnId={'Reference_Number'}

                SubComponent={row => {
                    console.log(JSON.stringify(row.original.data));
                    let subTable = null;
                    if (row.original.data) {
                        subTable = <div style={{ padding: "10px 2px 0px 34px" }}>
                            <ReactTable
                                data={row.original.data}
                                columns={subcolumns}
                                defaultPageSize={row.original.data.length}
                                showPagination={false}
                            />
                        </div>;
                    }
                    return (subTable);
                }}
            />;
        }

        return (
            <div className="box">
                {newBookings}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadNewBookings: () => (dispatch(actionCreators.fetchNewBookings()))
    }
}

const mapStateToProps = state => {
    return {
        newBookings: state.dashboardState.data,
        loading: state.dashboardState.isFetching
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewBookings);