import {getCookie} from 'src/utils/auth'
import {createReducer} from 'redux-immutablejs'
import {fromJS} from 'immutable'
import appConfig from 'src/config/app'
import * as types from 'src/config/types'

/*
* 初始化state上的数据
* */
const initialState = fromJS({
    token: '',
    user: null,
    message:''
})

export default createReducer(initialState, {
    [types.SHOW_MSG]: (state, action) => {
        debugger
        return state.merge({
            token: action.token
        })
    },
    [types.LOGIN_SUCCESS]: (state, action) => {

        return state.merge({
            token: action.token
        })
    },
    [types.GET_USERINFO_SUCCESS]: (state, {json}) => {
        return state.merge({
            user: json.data
        })
    },
    [types.GET_USERINFO_FAILURE]: (state, action) => state.set('user', null),
    [types.LOGOUT]: (state, action) => initialState.set('token', null),
    [types.UPDATE_USER_SUCCESS]: (state, action) => {
        return state.merge({
            user: action.user
        })
    },
    [types.UPDATE_USER_AVATAR]: (state, action) => {

        return state.mergeDeep({
            user: {
                avatar: appConfig.domain + action.avatar
            }
        })
    }
})


//一般在reducer函数中，难保不会突变state的值，一旦突变了，可能导致调试困难，所以为了解决突变的问题引入了immutable，天然防突变，具体原因不知道

