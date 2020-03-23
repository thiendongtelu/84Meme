import { USER_ACTION_TYPES } from './user.action.types';

const INITIAL_STATE = {
    isLogging: false,
    currentUser: null,
    error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_ACTION_TYPES.LOGGING:
            return {
                ...state,
                isLogging: true,
            }
        case USER_ACTION_TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                isLogging: false,
                currentUser: action.payload
            }
        case USER_ACTION_TYPES.LOGIN_FAILURE:
            return {
                ...state,
                isLogging: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;