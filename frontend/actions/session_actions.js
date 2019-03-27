import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const DELETE_SESSION = "DELETE_SESSION";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    };
};

const deleteSession = () => {
    return {
        type: DELETE_SESSION
    };
};

const receiveErrors = errors => {
    return {
        type: RECEIVE_ERRORS,
        errors
    };
};

export const signup = user => dispatch => (
    SessionApiUtil.signup(user).then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON))
        )
);

export const login = user => dispatch => {
    return (
        SessionApiUtil.login(user).then(
            user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
    );
};

export const logout = () => dispatch => (
    SessionApiUtil.logout().then(
        () => dispatch(deleteSession()),
        errors => dispatch(receiveErrors(errors.responseJSON))
        )
);

