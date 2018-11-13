import * as types from './actionTypes';
import * as endpoints from '../../Shared/app-global';
import axios from '../../axios-instance';

export function fetchNewBookings() {
    return (dispatch) => {
        dispatch({
            type: types.FETCHING_NEWBOOKINGS,
            isFetching: true
        });

        axios.get(endpoints.API_NEW_BOOKINGS)
            .then((response) => {
                dispatch({
                    type: types.FETCHING_NEWBOOKINGS_SUCCESS,
                    data: response.data.bookings,
                    isFetching: false
                });
            }).catch(err => {
                dispatch({
                    type: types.FETCHING_NEWBOOKINGS_FAIL,
                    data: [],
                    isFetching: false
                });
            });
    }
}

export function fetchCurrentBookings() {
    return (dispatch) => {
        dispatch({
            type: types.FETCHING_CURRENTBOOKINGS,
            isFetching: true
        });

        axios.get(endpoints.API_CURRENT_BOOKINGS)
            .then((response) => {
                dispatch({
                    type: types.FETCHING_CURRENTBOOKINGS_SUCCESS,
                    data: response.data.bookings,
                    isFetching: false
                });
            }).catch(err => {
                dispatch({
                    type: types.FETCHING_CURRENTBOOKINGS_FAIL,
                    data: [],
                    isFetching: false
                });
            });
    }
}

export function fetchPaymentPending() {
    return (dispatch) => {
        dispatch({
            type: types.FETCHING_PAYMENTPENDINGS,
            isFetching: true
        });

        axios.get(endpoints.API_PAYMENTPENDINGS)
            .then((response) => {
                dispatch({
                    type: types.FETCHING_PAYMENTPENDINGS_SUCCESS,
                    data: response.data.payments,
                    isFetching: false
                });
            }).catch(err => {
                dispatch({
                    type: types.FETCHING_PAYMENTPENDINGS_FAIL,
                    data: [],
                    isFetching: false
                });
            });
    }
}

export function fetchCompletedBookings() {
    return (dispatch) => {
        dispatch({
            type: types.FETCHING_COMPLETEDBOOKINGS,
            isFetching: true
        });

        axios.get(endpoints.API_COMPLETED_BOOKINGS)
            .then((response) => {
                dispatch({
                    type: types.FETCHING_COMPLETEDBOOKINGS_SUCCESS,
                    data: response.data.bookings,
                    isFetching: false
                });
            }).catch(err => {
                dispatch({
                    type: types.FETCHING_COMPLETEDBOOKINGS_FAIL,
                    data: [],
                    isFetching: false
                });
            });
    }
}


export function fetchCancelledBookings() {
    return (dispatch) => {
        dispatch({
            type: types.FETCHING_CANCELLEDBOOKINGS,
            isFetching: true
        });

        axios.get(endpoints.API_CANCELLED_BOOKINGS)
            .then((response) => {
                dispatch({
                    type: types.FETCHING_CANCELLEDBOOKINGS_SUCCESS,
                    data: response.data.bookings,
                    isFetching: false
                });
            }).catch(err => {
                dispatch({
                    type: types.FETCHING_CANCELLEDBOOKINGS_FAIL,
                    data: [],
                    isFetching: false
                });
            });
    }
}