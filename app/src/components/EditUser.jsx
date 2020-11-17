import React, { useState } from 'react'
import axios from 'axios'

const initialFormValues = {
    name: "",
    bio: ""
}

const EditUser = (props) => {
    const [editUser, setEditUser] = useState(props.user)
    const {toggle, setToggle} = props
    console.log("prop toggle:", toggle)

    const changeHandler = (event) => {
        setEditUser({...editUser, [event.target.name]: event.target.value})

    }

    const submitHandler = (event) => {
        event.preventDefault()
        axios
            .put(`http://localhost:4200/api/users/${props.user.id}`, editUser)
            .then(response => console.log(response))
            .catch(error => console.log(error))
        console.log("prop settoggle:", setToggle(!toggle))

    }

    return (
        <div>
            <h4>edit user info here</h4>
            <form onSubmit={submitHandler}>
                <input 
                 name = "name"
                 type = "text"
                 value={editUser.name}
                 onChange={changeHandler}
                 placeholder="enter name"
                />
                <input 
                 name = "bio"
                 type = "text"
                 value={editUser.bio}
                 onChange={changeHandler}
                 placeholder="enter bio"
                />
                <button>submit user</button>
            </form>
        </div>
    )
}

export default EditUser
