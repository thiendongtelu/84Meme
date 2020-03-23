import {USER_ACTION_TYPES} from './user.action.types';

export const isUserLogging = () => ({
    type:USER_ACTION_TYPES.LOGGING,
})

export const loginWithGoogleStart = () => ({
    type: USER_ACTION_TYPES.LOGIN_WITH_GOOGLE_START
})

export const loginStart = () => ({
    type:USER_ACTION_TYPES.LOGIN_START,
});

export const loginSuccess = user => ({
    type:USER_ACTION_TYPES.LOGIN_SUCCESS,
    payload:user
});

export const loginFailure = error => ({
    type:USER_ACTION_TYPES.LOGIN_FAILURE,
    payload:error
});

export const checkUserSession = () => ({
    type: USER_ACTION_TYPES.CHECK_USER_SESSION, 
});