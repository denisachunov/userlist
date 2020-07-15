import React, { useState, useContext } from 'react';
import { Button, Modal, Form, Input, Label, Dropdown } from 'semantic-ui-react';
import { UsersContext } from '../context/UsersContext';

export default () => {

    const [ firstname, setFirstname ] = useState ('');
    const [ lastname, setLastname ] = useState ('');
    const [ username, setUsername ] = useState ('');
    const [ password, setPassword ] = useState ('');
    const [ role, setRole ] = useState ('');
    const [ open, setOpen ] = useState ( false );
    const { addUser } = useContext ( UsersContext );

    const roleOptions = [
        { key: 'editor', value: 'editor', text: 'Editor' },
        { key: 'admin', value: 'admin', text: 'Admin' }
    ];

    const changeHandler = func => ({ target }) => func ( target.value )

    const addUserForm = (
        <Form className="content">
            <Form.Field>
                <Label>First Name</Label>
                <Input 
                    placeholder='First Name' 
                    value={firstname} 
                    onChange={changeHandler ( setFirstname )} 
                />
            </Form.Field>
            <Form.Field>
                <Label>Last Name</Label>
                <Input 
                    placeholder='Last Name' 
                    value={lastname} 
                    onChange={changeHandler ( setLastname )} 
                />
            </Form.Field>
            <Form.Field>
                <Label>Username</Label>
                <Input 
                    placeholder='Username' 
                    value={username}
                    onChange={changeHandler ( setUsername )} 
                />
            </Form.Field>
            <Form.Field>
                <Label>Password</Label>
                <Input
                    type="password"
                    placeholder='Password' 
                    value={password} 
                    onChange={changeHandler ( setPassword )} 
                />
            </Form.Field>
            <Form.Field>
                <Label>Role</Label>
                <Dropdown 
                    placeholder='Role'
                    fluid
                    selection
                    value={role} 
                    options={roleOptions} 
                    onChange={( e, data ) => setRole ( data.value )} 
                />
            </Form.Field>
        </Form>
    );

    const validation = () => firstname && lastname && username && role && password;

    const handleAddUser = event => {
        const approve = event.target.innerHTML === 'OK';
        const clearFields = () => {
            setFirstname ('');
            setLastname ('');
            setUsername ('');
            setPassword ('');
            setRole ('');
            setOpen ( false );
        }
        if ( approve && validation() ) {
            addUser ({ firstname, lastname, username, role, password });
            clearFields();
        }
        else if ( !approve ) {
            clearFields();
        }
    }

    return (
        <Modal
            open={open}
            trigger={<Button onClick={() => setOpen ( true )}>Add User</Button>}
            header='Add new user'
            content={addUserForm}
            actions={['Cancel', { key: 'done', content: 'OK', positive: true }]}
            size="small"
            onActionClick={handleAddUser}
            closeOnEscape={false}
            closeOnDimmerClick={false}
        />
    );
}