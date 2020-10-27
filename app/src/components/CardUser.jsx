import React from 'react'

const CardUser = (props) => {
    const gotoEdit = () => {
        console.log("put request?")
    }
    const deleteUser =() => {
        console.log("delete user")
    }
    return (
        <div>
            <h3>{props.user.name}</h3>
            <h4>{props.user.bio}</h4>
            <button onClick={gotoEdit}>edit user</button>
            <button onClick={deleteUser}>delete user</button>
        </div>
    )
}

export default CardUser
