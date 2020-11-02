import { RECEIVE_TWEETS } from '../actions/tweets'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_TWEETS:
            return {
                ...state,
                ...action.users
            }
        default:
            return state;
    }
}