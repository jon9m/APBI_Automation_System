
import * as actionTypes from './actionTypes';
import axios from '../../axios';
import * as endpoints from '../../Shared/app-global';

export const loadNavigationItems = (workspace) => {
    return dispatch => {
        dispatch(loadNavigationItemsStarts());

        if (workspace === 'apbi') { //TODO
            fetch(endpoints.API_NAVIGATION_ITEMS)
                .then((response) => response.json())
                .then((response) => {
                    console.dir(response.data);
                    dispatch(loadNavigationItemsSucces(response.data));
                });
        } else {
            dispatch(loadNavigationItemsFail());
        }
    }
}

export const loadNavigationItemsStarts = () => {
    return {
        type: actionTypes.LOAD_NAVIGATION_ITEMS_START
    };
}

export const loadNavigationItemsFail = () => {
    return {
        type: actionTypes.LOAD_NAVIGATION_ITEMS_FAIL
    };
}

export const loadNavigationItemsSucces = (navigationItems) => {
    return {
        type: actionTypes.LOAD_NAVIGATION_ITEMS,
        navigationItems: navigationItems
    }
}
