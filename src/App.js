import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk';

import reducers from './store/reducers';
import { routes } from './routes';

import Backend from './components/Layouts/Backend';

function configureStore(initialState) {
    const enhancer = compose(applyMiddleware(thunkMiddleware));
    return createStore(reducers, initialState, enhancer);
}

const store = configureStore({});

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Backend>
                        <Switch>
                            {routes.map((route, index) => {
                                return <Route key={index} path={route.path} component={route.component} exact={route.exact} />
                            })}
                        </Switch>
                    </Backend>
                </Router>
            </Provider>
        );
    }
}

export default App;
