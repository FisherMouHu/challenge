import React from 'react';
import { Table } from 'react-bootstrap';

export default function AllUsers() {
    return (
        <>
            <h4 className={"py-1 text-center"}>All Users</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>UserName</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </Table>
        </>
    )
}