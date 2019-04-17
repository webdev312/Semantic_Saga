export const action_startTesting = () => {
    return {
        type: 'ACTION_START_TESTING'
    };
}

// API call test
export const action_apiCall = () => {
    return {
        type: 'ACTION_API_CALL'
    };
}

export const action_apiCall_Success = (json_resp) => {
    return {
        type: 'ACTION_API_CALL_SUCCESS', json_resp
    };
}
export const action_apiCall_Error = (err) => {
    return {
        type: 'ACTION_API_CALL_ERROR', err
    };
}
