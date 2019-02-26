import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import auth from './auth';
const history = createBrowserHistory();

const rootReducer= combineReducers({
    router: connectRouter(history),
    auth
});

export default rootReducer

