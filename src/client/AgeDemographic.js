import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownButton, Table } from 'react-bootstrap';

export default function AgeDemographic() {
    const [items, setItems] = useState([]);
    const [selectItem, setSelectItem] = useState("Item");
    const [ages, setAges] = useState([]);
    
    // Load the Items from the Backend
    useEffect(() => {
        fetch("http://localhost:3000/items")
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    let itemList = [];

    for (const item of items) {
        itemList.push(
            <Dropdown.Item key={item} eventKey={item}>
                {item}
            </Dropdown.Item>
        )
    }

    function handleSelect(e) {
        setSelectItem(e);
    }

    // Load Age Group based on Selection
    useEffect(() => {
        fetch(`http://localhost:3000/users/age?item=${selectItem}`)
            .then(res => res.json())
            .then(data => setAges(data));
    },[selectItem]);

    let ageCountList = [];

    for (const [key, value] of Object.entries(ages)) {
        ageCountList.push(
            <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
            </tr>
        )
    }

    return (
        <>
            <h4 className={"text-center"}>Age Demographic of Users</h4>
            <DropdownButton className={"py-1"} title={selectItem} onSelect={handleSelect}>
                {itemList}
            </DropdownButton>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Age</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {ageCountList}
                </tbody>
            </Table>
        </>
    )
}