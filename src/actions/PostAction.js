import * as actionType from '../action_types'

export default function listPosts(data){
    return{
        type: actionType.LIST_POST,
        payload: data
    }
}