import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setListOfUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>User List</h1>
            <ul>
                {listOfUsers.map(user => (
                    <li key={user.id} style={{ margin: '10px 0', listStyle: 'none' }}>
                        <strong>{user.name}</strong> ({user.email})
                        <br />
                        <small>Address: {user.address.city}, {user.address.street}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
