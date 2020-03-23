import {createSelector} from 'reselect';

const selectUser = state => state.user;

export const selectUserIsLogging = createSelector(
    [selectUser],
    user => user.isLogging
);

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)