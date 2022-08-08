import React,{useState,useEffect} from 'react'
import UserAuth from './UserAuth'
import Home from './Home'
import { auth } from './firebase'

const App = () => {
  const [prasentUser,setPrasentUser]=useState(null);
useEffect(()=>{
  auth.onAuthStateChanged(user => {
    if(user){
    setPrasentUser({
      uid:user.uid,
      email:user.email
    })
  }
else{
  setPrasentUser(null);
}
  })
},[])
  return (
    <div>
      <center>
     {prasentUser ? <Home prasentUser={prasentUser}/> : <UserAuth/>}
      </center>
    </div>
  )
}

export default App