import { takeLatest, put, call, all } from 'redux-saga/effects';

import { USER_ACTION_TYPES } from './user.action.types';
import { loginSuccess, loginFailure } from './user.action';
import { signInWithGoogle, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(loginSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error) {
        yield put(loginFailure(error));
    }
}
//Sign In with Google
export function* loginWithGoogle() {
    try {
        const { user } = yield signInWithGoogle();
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(loginFailure(error));
    }
}

export function* onGoogleLogin() {
    yield takeLatest(USER_ACTION_TYPES.LOGIN_WITH_GOOGLE_START, loginWithGoogle);
}

//Check User Authentication
export function* isAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(loginFailure(error))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isAuthenticated);
}


export function* userSaga() {
    yield all([call(onGoogleLogin), call(onCheckUserSession)]);
}