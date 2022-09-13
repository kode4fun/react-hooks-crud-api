import React, { useState } from 'react';

function AddUser(props) {

    const userInitial = { id: null, name: '', username: '' }
    const [newUser, setNewUser] = useState(userInitial);

    const handleNameChange = (event) => {
        const newName = event.target.value;
        setNewUser({ ...newUser, name: newName })
    }

    const handleUserNameChange = (event) => {
        const newUserName = event.target.value;
        setNewUser({ ...newUser, username: newUserName })
    }

    const handleAddUserClick = () => {
        props.addUserFunc(newUser);
        setNewUser(userInitial);
    }

    return (
        <form onSubmit={(event) => {event.preventDefault();}}>
            <div class="form-group">
                <label>Name</label>
                <input type='text' className='form-control' value={newUser.name} onChange={handleNameChange} />
            </div>
            <div class="form-group">
                <label>UserName</label>
                <input type='text' className='form-control' value={newUser.username} onChange={handleUserNameChange} />
            </div>
            <button className='btn btn-primary' onClick={handleAddUserClick}>Add user</button>
        </form>
    )
}

export default AddUser;