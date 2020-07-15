import axios from 'axios';
import { Action } from './context/reducer';

const api = axios.create ({
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const addUserTransport = ( dispatch, setLoading ) => async user => {
    setLoading ( true );
    try {
        const response = await api.post ( '/save', user );
        if ( response.status === 200 ) {
            const { data } = response;
            dispatch ({ type: Action.ADD_USER, ...data });
        }
    }
    catch ( err ) {
        console.log ( err );
    }
    finally {
        setLoading ( false );
    }
}

export const getUsersTransport = ( dispatch, setLoading ) => async () => {
    setLoading ( true );
    try {
        const response = await api.get ( '/get/?page=1' );
        if ( response.status === 200 ) {
            const { data } = response;
            dispatch ({ type: Action.GET_USERS, data });
        }
    }
    catch ( err ) {
        console.log ( err );
    }
    finally {
        setLoading ( false );
    }
}

export const getUsersQuery = dispatch => async query => {
    try {
        const response = query ? await api.get ( `/get/${query}` ) : await api.get ( '/get' );
        if ( response.status === 200 ) {
            const { data } = response;
            dispatch ({ type: Action.GET_USERS, data });
        }
    }
    catch ( err ) {
        console.log ( err );
    }
}