import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

export default function AllUsers() {
    let [users, setUsers] = useState([]);

    // Load the User from Backend
    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    let userInRow = [];

    for (const [key, value] of Object.entries(users)) {
        userInRow.push(
            <tr key={key}>
                <td>{value.username}</td>
                <td>{value.age}</td>
            </tr>
        )
    }

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
                    {userInRow}
                </tbody>
            </Table>
        </>
    )
}