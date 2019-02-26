import {createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {routerMiddleware} from 'connected-react-router'
import {persistState} from 'redux-devtools'
import {createLogger} from 'redux-logger'
import {Iterable} from 'immutable'
import DevTools from './DevTools'
import rootReducer from 'src/reducers'


export default function configureStore(initialState, history) {
    const stateTransformer = (state) => {
        const newSate = {}
        Object.keys(state).forEach(x => {
            if (Iterable.isIterable(state[x])) {
                newSate[x] = state[x].toJS()
            } else {
                newSate[x] = state[x]
            }
        })
        return newSate
    }
    const middleware = [thunkMiddleware,routerMiddleware(history)];
    let finalCreateStore
    if (__DEVCLIENT__) {//开发环境，使用logger插件，redux-devtools插件
        if (__DEVLOGGER__) {
            middleware.push(createLogger({stateTransformer}))
        }
        finalCreateStore = compose(
            applyMiddleware(...middleware),
            DevTools.instrument()
        )
    } else {//生产环境
        finalCreateStore = compose(applyMiddleware(...middleware))
    }

    const store = createStore(rootReducer, initialState, finalCreateStore);//创建store

    // if (module.hot) {
    //     module.hot.accept('../reducers', () => {
    //         const nextReducer = require('../reducers')
    //         store.replaceReducer(nextReducer)
    //     })
    // }
    return store
}
