import * as types from 'src/config/types'
import {push} from 'connected-react-router'
import {saveCookie, getCookie, signOut} from 'src/utils/auth'
import * as api from 'src/api'
import AppConfig from 'src/config/app'


export const getSnsLogins = () => {
    return {
        type: types.GET_SNSLOGINS,
        promise: api.getSnsLogins()
    }
}

export const getCaptchaUrl = () => {
    return {
        type: 'GET_CAPTCHAURL',
        captchaUrl: AppConfig.domain + 'login/getCaptcha?' + Math.random()
    }
}


export const loginSuccess = function (token) {
    return {
        type: 'LOGIN_SUCCESS',
        token: token
    }
}

export const showMsg = (content, type = 'error') => {
    return {
        type: 'SHOW_MSG',
        message: {content: content, type: type}
    }
}

export const localLogin = function (form) {
    return (dispatch, getState) => {

        return api.localLogin(form)
            .then(response => {

                return {
                    json: response.data,
                    status: response.statusText
                }
            })
            .then(({json, status}) => {
                debugger

                dispatch(showMsg('登录成功,欢迎光临!', 'success'))

                dispatch(push('/'))

            }).catch(err => {
                const errorMsg = err.response ? (err.response.data && err.response.data.errorMsg) ? err.response.data.errorMsg : '登录失败' : '登录失败'
                //登录异常
                dispatch(getCaptchaUrl())
                return dispatch(showMsg(errorMsg))
            })
    }
}

