export const Action = {
    ADD_USER: 'ADD_USER',
    GET_USERS: 'GET_USERS'
}

export default ( state, { type, ...data }) => {
    switch ( type ) {
        case Action.ADD_USER:
            return [ data, ...state ];
        case Action.GET_USERS:
            return data.data;
        default:
            return state;
    }
}