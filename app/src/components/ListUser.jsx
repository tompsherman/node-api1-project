import React from 'react'
import CardUser from './CardUser'

const ListUser = () => {
    return (
        <div>
            <h2>User List</h2>
            <CardUser />
            {/* {
                userList.map((user)=>(
                <CardUser key={user.id} user={user}/>))
            } */}

        </div>
    )
}

export default ListUser
