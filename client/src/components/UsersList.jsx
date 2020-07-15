import React, { useContext } from 'react';
import { UsersContext } from '../context/UsersContext';
import { Table, Message, Dimmer, Loader } from 'semantic-ui-react';
import ViewUser from '../components/ViewUser';

export default () => {
    const { users, loading } = useContext ( UsersContext );
    return (
        <>
            <Dimmer active={loading}>
                <Loader />
            </Dimmer>
            {
                users.length ? (
                    <Table celled selectable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Username</Table.HeaderCell>
                                <Table.HeaderCell>Role</Table.HeaderCell>
                                <Table.HeaderCell></Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {
                                users.map (({ _id, firstname, lastname, username, role }, index ) => {
                                    return (
                                        <Table.Row key={_id}>
                                            <Table.Cell>{`${firstname} ${lastname}`}</Table.Cell>
                                            <Table.Cell>{username}</Table.Cell>
                                            <Table.Cell>{role}</Table.Cell>
                                            <Table.Cell className="actions-cell" textAlign='center' width={1}>
                                                <ViewUser {...{ firstname, lastname, username, role }} />
                                            </Table.Cell>
                                        </Table.Row>
                                    )
                                })
                            }
                        </Table.Body>
                    </Table>
                )
                : (
                    <Message info>
                        <Message.Header>There're no users in the system</Message.Header>
                    </Message>
                )
            }
        </>
        
    );
}