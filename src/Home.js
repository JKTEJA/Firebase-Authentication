import React from 'react'
import { auth } from './firebase'

const Home = ({prasentUser}) => {
  return (
    <div>
     <h1>Welcome To Home page Mr.{prasentUser.email}</h1>   
     <button onClick={()=> auth.signOut()}>sign Out</button>
    </div>
  )
}

export default Home