import * as types from './actionTypes';
import * as endpoints from '../../Shared/app-global';

export function fetchNewBookings() {
    return (dispatch) => {
        dispatch({
            type: types.FETCHING_NEWBOOKINGS,
            isFetching: true
        });

        fetch(endpoints.API_NEW_BOOKINGS)
            .then((response) => response.json())
            .then((response) => {
                dispatch({
                    type: types.FETCHING_NEWBOOKINGS_SUCCESS,
                    data: response.data,
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

        fetch(endpoints.API_CURRENT_BOOKINGS)
            .then((response) => response.json())
            .then((response) => {
                dispatch({
                    type: types.FETCHING_CURRENTBOOKINGS_SUCCESS,
                    data: response.data,
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

        fetch(endpoints.API_PAYMENTPENDINGS)
            .then((response) => response.json())
            .then((response) => {
                dispatch({
                    type: types.FETCHING_PAYMENTPENDINGS_SUCCESS,
                    data: response.data,
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

        fetch(endpoints.API_COMPLETED_BOOKINGS)
            .then((response) => response.json())
            .then((response) => {
                dispatch({
                    type: types.FETCHING_COMPLETEDBOOKINGS_SUCCESS,
                    data: response.data,
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

        fetch(endpoints.API_CANCELLED_BOOKINGS)
            .then((response) => response.json())
            .then((response) => {
                dispatch({
                    type: types.FETCHING_CANCELLEDBOOKINGS_SUCCESS,
                    data: response.data,
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