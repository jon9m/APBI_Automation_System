import { FETCHING_NEWBOOKINGS, FETCHING_NEWBOOKINGS_SUCCESS } from '../actions/actionTypes';

const initialState = {
    data: [],
    isFetching: false,
    error: false
}

export default function dashboardReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_NEWBOOKINGS:
            return {
                ...state,
                isFetching: true
            }
        case FETCHING_NEWBOOKINGS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            }
        default:
            return state
    }
}