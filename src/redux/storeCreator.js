import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import { loginReducer } from './reducers/login';
import { reducer } from './reducers/reducer';

export default function() {
    return createStore(
            combineReducers({
                loginReducer,
                reducer
            }),
            applyMiddleware(ReduxThunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
}