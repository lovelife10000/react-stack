import React from 'react'
import ReactDOM from 'react-dom'
import {ConnectedRouter} from 'connected-react-router'
import {Provider} from 'react-redux'
import {createBrowserHistory} from 'history';
import configureStore from 'src/store/configureStore'
import DevTools from 'src/store/Devtools';
import {renderRoutes} from 'react-router-config'
import {Router, Route,Switch} from 'react-router';


import routes from 'src/routes/routes'

const history = createBrowserHistory();
const initialState = window.__INITIAL_STATE__;//读取初始的store

const store = configureStore(initialState, history);


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>

                    {renderRoutes(routes)}

                <DevTools/>
            </div>

        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)