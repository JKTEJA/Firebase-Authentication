import React,{useState} from 'react'
import { auth } from './firebase';

const UserAuth = () => {
    const [data,setData]=useState({
        email:"",
        password:""
    })
const {email,password}=data;
    const changehandlar= e=>{
        setData({...data,[e.target.name]:e.target.value})
 }
 const SignUp=e=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then(
        user=>console.log(user)
        ).catch(err=>console.log(err))
 }
 const SignIn=e=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then(
        user=>console.log(user)
        ).catch(err=>console.log(err))
 }

  return (
    <div className='jk'>
        <center>
<form autoComplete='off'>
        <h1>authentication form</h1>
<input type="email" name="email" value={email} placeholder='email' onChange={changehandlar}/><br/><br/>
<input type="password" name="password" value={password} placeholder='password' onChange={changehandlar}/><br/><br/>
 <button onClick={SignIn}>Sign In</button>&nbsp;&nbsp;
<button onClick={SignUp}>Sign Up</button>
</form>

        </center>
    </div>
  )
}

export default UserAuth