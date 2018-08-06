import { LOAD_NAVIGATION_ITEMS_FAIL, LOAD_NAVIGATION_ITEMS } from '../actions/actionTypes';

const initialState = {
    navigationItems: []
}

export default function contactReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_NAVIGATION_ITEMS:
            return {
                ...state,
                navigationItems: action.navigationItems
            }
        case LOAD_NAVIGATION_ITEMS_FAIL:
            return {
                ...state
            }
        default:
            return state
    }
}