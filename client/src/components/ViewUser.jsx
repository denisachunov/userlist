import React from 'react';
import { Button, Modal, Grid } from 'semantic-ui-react';

export default ({ firstname, lastname, username, role }) => {

    const viewUserForm = (
        <div className="content">
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        First Name
                    </Grid.Column>
                    <Grid.Column>
                        <p>{ firstname }</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        Last Name
                    </Grid.Column>
                    <Grid.Column>
                        <p>{ lastname }</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        Username
                    </Grid.Column>
                    <Grid.Column>
                        <p>{ username }</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        Role
                    </Grid.Column>
                    <Grid.Column>
                        <p>{ role }</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );

    return (
        <Modal
            trigger={<Button title='View details' icon="eye" />}
            header='View user'
            content={viewUserForm}
            actions={['Close']}
            size="tiny"
        />
    );
}