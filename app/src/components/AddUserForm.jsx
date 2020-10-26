import React, {useState} from 'react'

const AddUserForm = () => {

    const [newUser, setNewUser] = useState(
       {name: "",
        bio: ""}
    )

    const changeHandler = (event) => {
        setNewUser({...newUser, [event.target.name]: event.target.value})
    }

    const submitHandler = (event) => {
        event.preventDefault()
        console.log("post to database?")
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
