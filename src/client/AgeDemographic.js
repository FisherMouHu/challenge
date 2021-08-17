import React from 'react';
import { DropdownButton, Table } from 'react-bootstrap';

export default function AgeDemographic() {
    return (
        <>
            <h4 className={"text-center"}>Age Demographic of Users</h4>
            <DropdownButton className={"py-1"} title="Item">

            </DropdownButton>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Age</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                        
                </tbody>
            </Table>
        </>
    )
}