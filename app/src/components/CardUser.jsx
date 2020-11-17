import React, { useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import EditUser from './EditUser'

const CardUser = (props) => {
    // const [editUser, setEditUser] = useState("")
    const [toggle, setToggle] = useState(false)

    const gotoEdit = () => {
        setToggle(!toggle)
    }

    const deleteUser =() => {
        console.log("delete user:", props.user.id)
        axios
            .delete(`http://localhost:4200/api/users/${props.user.id}`)
            .then(response => console.log(response))
            .catch(error => console.log({error}))
    }

    return (
        <div>
            <h3>{props.user.name}</h3>
            <h4>{props.user.bio}</h4>
            <button onClick={gotoEdit}>edit user</button>
            <button onClick={deleteUser}>delete user</button>
            {
                toggle? <EditUser user={props.user} toggle={toggle} setToggle={setToggle}/> : null
            }
        </div>
    )
}

export default CardUser
