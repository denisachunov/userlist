import React from 'react';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import SearchUser from './components/SearchUser';
import UsersContextProvider from './context/UsersContext';
import { Header, Container, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default () => {

    return (
      <UsersContextProvider>
        <Container>
          <Header as='h1' className="users-header">BUGSEC users app</Header>
          <Grid columns={2}>
            <Grid.Column>
              <SearchUser />
            </Grid.Column>
            <Grid.Column textAlign="right">
              <AddUser />
            </Grid.Column>
          </Grid>
          <UsersList />
        </Container>
      </UsersContextProvider>
    );
}