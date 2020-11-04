import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from "react-redux-loading";

const AUTHED_ID = 'tylermcginnis'

export function handleInitData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
        .then(({users, tweets}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveTweets(tweets));
            dispatch(setAuthedUser(AUTHED_ID));
            dispatch(hideLoading());
        })
    }
}