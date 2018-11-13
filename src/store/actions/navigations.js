
import * as actionTypes from './actionTypes';
import * as endpoints from '../../Shared/app-global';
import axios from '../../axios-instance';

export const loadNavigationItems = (workspace) => {
    return dispatch => {
        dispatch(loadNavigationItemsStarts());

        if (workspace === 'apbi') { //TODO
            axios.get(endpoints.API_NAVIGATION_ITEMS)
                .then((response) => {
                    console.dir(response.data.navitems);
                    dispatch(loadNavigationItemsSucces(response.data.navitems));
                }).catch(err => {
                    dispatch(loadNavigationItemsFail());
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
