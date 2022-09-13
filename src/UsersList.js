import React from 'react';

function UsersList(props) {

    const handleDeleteUser = (user) => {
        props.deleteUserFunc(user);
    }

    const handleEditUser = (user) => {
        props.editUserFunc(user);
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map((user) => {
                    return (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <button className='btn btn-primary' onClick={() => handleEditUser(user)}>Edit</button>
                                <button className='btn btn-primary' onClick={() => handleDeleteUser(user)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default UsersList;