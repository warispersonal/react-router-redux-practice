import * as actionType from '../action_types'

const INITIAL_STATE = {
    posts: []
}

export function postReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actionType.LIST_POST: return {
            ...state,
            posts: action.payload
        }
        default:
            return state;
    }
}