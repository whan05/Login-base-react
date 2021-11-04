import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { AuthReducer } from '../reducers/authReducer';
import { UiReducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    auth: AuthReducer,
    ui: UiReducer
})

export const Store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
    );