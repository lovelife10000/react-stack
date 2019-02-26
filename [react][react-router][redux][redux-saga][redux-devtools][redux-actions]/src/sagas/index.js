import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from 'src/api'


function* fetchUser(action) {
    debugger
    try {
        const user = yield call(Api.localLogin, action.payload.userId);
        yield put({type: "ABC_SUCCEEDED", user: user});
    } catch (e) {
        yield put({type: "ABC_FAILED", message: e.message});
    }
}


// function* mySaga() {
//     yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }


function* sagas() {
    yield takeLatest("ABC", fetchUser);
}

export default sagas;