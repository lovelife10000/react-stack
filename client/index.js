import React from 'react'
import ReactDOM from 'react-dom'
import routes from "src/routes/routes";
import {Provider} from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
import { renderRoutes } from 'react-router-config'
import configureStore from "../../L-react-app-admin/app/store/configureStore";
const history = createHistory()
const store = configureStore(initialState, history)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {renderRoutes(routes)}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);