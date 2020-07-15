import React, { useState, useContext } from 'react';
import { Search } from 'semantic-ui-react';
import { UsersContext } from '../context/UsersContext';

export default () => {

    const [ isLoading, setIsLoading ] = useState ( false );
    const [ search, setSearch ] = useState ( '' );
    const { getUsers } = useContext ( UsersContext );

    const handleSearchChange = async ( e, { value }) => {
        setIsLoading ( true );
        setSearch ( value );
        await getUsers ( value );
        setIsLoading ( false );
    }

    return (
        <Search
            placeholder="Find Users"
            className="users-search"
            loading={isLoading}
            value={search}
            showNoResults={false}
            onSearchChange={handleSearchChange}
        />
    );
}