import React, { useEffect, useState } from "react";

function EditUser(props) {
    const userInitial = { id: null, name: '', username: '' }
    const [user, setUser] = useState(props.user);

    const handleNameChange = (event) => {
        const newName = event.target.value;
        setUser({ ...user, name: newName })
    }

    const handleUserNameChange = (event) => {
        const newUserName = event.target.value;
        setUser({ ...user, username: newUserName })
    }

    const handleAddUserClick = () => {
        props.modifyUserFunc(user);
        setUser(userInitial);
    }

    // when user is changed, component rerenders 
    useEffect(() => {
        setUser(props.user);
    }, [props])

    return (
        <form onSubmit={(event) => {event.preventDefault();}}>
            <div class="form-group">
                <label>Name</label>
                <input type='text' className='form-control' value={user.name} onChange={handleNameChange} />
            </div>
            <div class="form-group">
                <label>UserName</label>
                <input type='text' className='form-control' value={user.username} onChange={handleUserNameChange} />
            </div>
            <button className='btn btn-primary' onClick={handleAddUserClick}>Edit user</button>
        </form>
    );


}


export default EditUser;