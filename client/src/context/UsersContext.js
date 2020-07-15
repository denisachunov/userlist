import React, { createContext, useReducer, useState, useEffect } from 'react';
import Reducer from './reducer';
import { addUserTransport, getUsersTransport, getUsersQuery } from '../transport';

export const UsersContext = createContext();

export default props => {
    let [ users, dispatch ] = useReducer (
        Reducer,
        []
    );
    const [ loading, setLoading ] = useState ( false );
    const addUser = addUserTransport ( dispatch, setLoading );
    const getUsers = getUsersQuery ( dispatch );
    useEffect ( () => {
        const get = getUsersTransport ( dispatch, setLoading );
        get();
    }, [] );
    return (
        <UsersContext.Provider value={{ users, addUser, getUsers, loading }}>
            { props.children }
        </UsersContext.Provider>
     );
}