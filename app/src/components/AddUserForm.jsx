import React, {useState} from 'react'
import axios from 'axios'

const AddUserForm = ({URL}) => {
    const initialFormValues = {name: "",
    bio: ""}
    const [newUser, setNewUser] = useState(initialFormValues)

    const changeHandler = (event) => {
        setNewUser({...newUser, [event.target.name]: event.target.value})
    }

    const submitHandler = (event) => {
        event.preventDefault()
        console.log("post to database?")
       
        axios
            .post('http://localhost:4200/api/users', newUser)
            .then(response => console.log(response))
            .catch(error => console.log({error}))
            .finally(setNewUser(initialFormValues))
    }
    return (
        <div>
            <h2>add user form</h2>
            <form onSubmit={submitHandler}>
                <input 
                 name = "name"
                 type = "text"
                 value={newUser.name}
                 onChange={changeHandler}
                 placeholder="enter name"
                />
                <input 
                 name = "bio"
                 type = "text"
                 value={newUser.bio}
                 onChange={changeHandler}
                 placeholder="enter bio"
                />
                <button>submit user</button>
            </form>
        </div>
    )
}

export default AddUserForm
