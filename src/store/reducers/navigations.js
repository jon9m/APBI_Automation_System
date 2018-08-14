import { LOAD_NAVIGATION_ITEMS_START, LOAD_NAVIGATION_ITEMS_FAIL, LOAD_NAVIGATION_ITEMS } from '../actions/actionTypes';

const initialState = {
    navigationItems: [],
    loading: false
}

export default function contactReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_NAVIGATION_ITEMS_START:
            return {
                ...state,
                navigationItems: [],
                loading: true
            }
        case LOAD_NAVIGATION_ITEMS:
            return {
                ...state,
                navigationItems: action.navigationItems,
                loading: false
            }
        case LOAD_NAVIGATION_ITEMS_FAIL:
            return {
                ...state,
                navigationItems: [],
                loading: false
            }
        default:
            return state
    }
}