console.log("hello new world, here we come!")

// #1 - import dependencies
const express = require('express')
const generate = require('shortid').generate

// const generate = require('cuid').generate

// #2 instantiate and configure server
const app = express()
app.use(express.json())

// #3 - decide port

const PORT = 4200

// #4 - create fake data

let users = [
    { id: generate(), name: "Tom", bio: "Discovered 5th season of the year"}
]

// #5 Endpoints:

// // #5a - [GET] /api/users - all users
app.get('/api/users', (req, res)=>{
    if (users.length > 0){
        res.status(200).json(users)
    } else {
        res.status(500).json({errorMessage: "the users information could not be retrieved."})
    }
})

// // #5b - [ GET ] /api/users/:id - user by id
app.get('/api/users/:id', (req, res)=>{
    const {id} = req.params
    const user = users.filter(user => user.id === id)
    try{if (!user){
        res.status(404).json({message: `no user with ${id} found`})
    } else {
        res.status(200).json(user)
    }} catch(error) {
        res.status(500).json({errorMessage: "the users information could not be retrieved."})
    } 
})

// // #5c - [ POST ] /api/users - new user
app.post('/api/users', (req, res)=>{
    const {name,bio} = req.body
    console.log({name}, {bio})

    try{if(!name || !bio) {
        res.status(400).json({errorMessage: "Please provide name and bio for the user."})
    } else {
        const newUser = { id: generate(), name, bio}
        users.push(newUser)
        res.status(201).json(users)
    }} catch(error) {
        res.status(500).json({errorMessage: "the users information could not be retrieved."})
    } 
})

// // #5d - [ PUT ] /api/users/:id - replace user with id (params)
app.put('/api/users/:id', (req, res)=>{
    const {id} = req.params
    const {name, bio} = req.body
    const indexoUser = users.findIndex(user => user.id === id)
    try{
        if(!name || !bio) {
            res.status(400).json({errorMessage: "Please provide name and bio for the user."})
        } else if (indexoUser !== -1) {
            users[indexoUser] = {id, name, bio}
            res.status(200).json({id, name, bio })
        } else {
            res.status(404).json({message: `no user with ${id} found`})
        } 
    } catch(error){
        res.status(500).json({errorMessage: "the users information could not be retrieved."})
    }
})

// // #5e - [ DELETE ] /api/users/:id - delete user with id (params)
app.delete('/api/users/:id', (req,res)=>{
    const {id} = req.params
    try{
        if (!users.find(user => user.id === id)){
            res.status(404).json({message: "the user with specified ID doesnt exist"})
        } else {
            users = users.filter(user => user.id !== id)
            res.status(200).json({message: `user with ${id} has been deleted`})
        }
    } catch(error) {
        res.status(500).json({message: "we got a big fucking problem, Morty"})    }
})

// // #5f - [ CATCHALL ] - (404 error)
app.all('*', (req, res) => {
    res.status(404).json({message: "file not found. try again."})
})

app.listen (PORT, ()=> {
    console.log(`server smoking on port ${PORT}`)
})




