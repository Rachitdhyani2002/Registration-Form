import React, { Fragment, useEffect, useState } from 'react'
import './App.css';
export default function() {
    const data={
        name:"",
        email:"",
        password:""
    }
    const[inputData,setInputData]=useState(data);
    const[flag,setFlag]=useState(false);
    useEffect(()=>{
        console.log("Registered");
    },[flag])
function handleData(e){
    setInputData({...inputData,[e.target.name]:e.target.value})
    console.log(inputData);
}
function handleSubmit(e){
e.preventDefault();
if(!inputData.name||!inputData.email||!inputData.password){
    alert("All Fields Are Mandatory")
}
else{
    setFlag(true);
}
}

 return (
   <Fragment>
   <pre className='content'>{(flag)?<h2>Hello {inputData.name}, You have registered successfully with your email id {inputData.email}</h2>:""}</pre>
     <form className='container' onSubmit={handleSubmit}>
        <div className='header'>
            <h1>Registration form </h1>
           </div>
           <div className='inputs'>
           <input type='text' placeholder='Enter Your Name' name='name' value={inputData.name} onChange={handleData}></input>
           <input type='email' placeholder='Enter Your Email' name='email' value={inputData.email} onChange={handleData}></input>
           <input type='password' placeholder='Enter Your Password' name='password' value={inputData.password} onChange={handleData}></input>
           <button type='submit' className='btn'>Register</button>          
           </div>
        
    </form>
   </Fragment>
  )
}
