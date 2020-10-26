import React from 'react'

import './App.css'
import AddUserForm from './components/AddUserForm'
import ListUser from './components/ListUser'

const App = () => {
  return (
    <div className="App">
     <h1> this is the app</h1>
     <AddUserForm />
     <ListUser />
    </div>
  );
};

export default App;