import axios from 'axios'
import React, { useState, useEffect } from 'react'
import CardUser from './CardUser'
import EditUser from './EditUser'

const ListUser = () => {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        
            axios
            .get('http://localhost:4200/api/users')
            .then(response => setUserList(response.data))
            .catch(error => console.log({error}));
      }, [userList])


    return (
        <div>
            <h2>User List</h2>
            {
                userList.map((user)=>(
                <CardUser key={user.id} user={user}/>))
            }

        </div>
    )
}

export default ListUser
