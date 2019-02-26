import * as types from 'src/config/types'
import {push} from 'connected-react-router'
import {saveCookie, getCookie, signOut} from 'src/utils/auth'
import * as api from 'src/api'
import AppConfig from 'src/config/app'
import { createAction } from 'redux-actions';


// export const localLogin = function () {
//     return {
//         type: 'ABC',
//         captchaUrl: '666'
//     }
// }

export const localLogin=createAction('ABC');
