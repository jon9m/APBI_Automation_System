import * as ACTION_TYPES from '../actions/actionTypes';

const initialState = {
    data: [],
    isFetching: false,
    error: false
}

export default function dashboardReducer(state = initialState, action) {
    switch (action.type) {
        //NEW
        case ACTION_TYPES.FETCHING_NEWBOOKINGS:
            return {
                ...state,
                isFetching: true
            }
        case ACTION_TYPES.FETCHING_NEWBOOKINGS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            }
        case ACTION_TYPES.FETCHING_NEWBOOKINGS_FAIL:
            return {
                ...state,
                isFetching: false,
                data: action.data
            }
        //CURRENT
        case ACTION_TYPES.FETCHING_CURRENTBOOKINGS:
            return {
                ...state,
                isFetching: true
            }
        case ACTION_TYPES.FETCHING_CURRENTBOOKINGS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            }
        case ACTION_TYPES.FETCHING_CURRENTBOOKINGS_FAIL:
            return {
                ...state,
                isFetching: false,
                data: action.data
            }
        //PAYMENT PENDING
        case ACTION_TYPES.FETCHING_PAYMENTPENDINGS:
            return {
                ...state,
                isFetching: true
            }
        case ACTION_TYPES.FETCHING_PAYMENTPENDINGS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            }
        case ACTION_TYPES.FETCHING_PAYMENTPENDINGS_FAIL:
            return {
                ...state,
                isFetching: false,
                data: action.data
            }

        //COMPLETED
        case ACTION_TYPES.FETCHING_COMPLETEDBOOKINGS:
            return {
                ...state,
                isFetching: true
            }
        case ACTION_TYPES.FETCHING_COMPLETEDBOOKINGS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            }
        case ACTION_TYPES.FETCHING_COMPLETEDBOOKINGS_FAIL:
            return {
                ...state,
                isFetching: false,
                data: action.data
            }

        //CANCELLED
        case ACTION_TYPES.FETCHING_CANCELLEDBOOKINGS:
            return {
                ...state,
                data: [],
                isFetching: true
            }
        case ACTION_TYPES.FETCHING_CANCELLEDBOOKINGS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            }
        case ACTION_TYPES.FETCHING_CANCELLEDBOOKINGS_FAIL:
            return {
                ...state,
                isFetching: false,
                data: action.data
            }

        //DEFAULT    
        default:
            return {
                ...state,
                isFetching: false,
                data: []
            }
    }
}