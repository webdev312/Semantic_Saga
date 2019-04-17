import { fromJS } from 'immutable'
import * as actions from "../actions";

const initialState = fromJS({
    bIsStart: false,
    bIsGotit: false,
    jsonData: []
});

export default function appReducer(state = initialState, action){
    switch(action.type){
        case 'ACTION_START_TESTING':
        return state
            .set('bIsStart', true);
        case 'ACTION_API_CALL_SUCCESS':
        return state
            .set('jsonData', action.json_resp);
        case 'ACTION_API_CALL_ERROR':
        return state;
        default:
        return state;
    }
}