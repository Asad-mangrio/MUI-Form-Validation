import React, { useEffect, useState } from 'react'

import { Button, TextField } from '@mui/material'

const FormComponent = () => {

  const [Name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [Age , setAge] = useState('')

  const [nameErr , setNameErr] = useState ()
  const [emailErr , setEmailErr] = useState ()
  const [ageErr , setAgeErr] = useState ()


  const formSubmit = (e) => {
    e.preventDefault()
    console.log(Name , email , Age);
    if (Name === '') {
      setNameErr(true)
    }
    if (email === '') {
      setEmailErr(true)
    }
    if (Age === '') {
      setAgeErr(true)
    }
    
  };
  useEffect (() => {
    if (Name !== "")
      setNameErr()
    
    }
    
   , [Name])
  useEffect (() => {
    if (email !== "")
      setEmailErr()
    
    }
    
   , [email])
  useEffect (() => {
    if (Age !== "")
      setAgeErr()
    
    }
    
   , [Age]);
   

  return (
    <>
    <div className="container ms-5">
      <form onSubmit={formSubmit} className='text-center border w-50 m-5 bg-info text-white rounded-3'>
      <div className='m-5'>
      <h1 className='text-start'>Name</h1>
      <TextField size='small' value={Name} onChange={(e) => setName(e.target.value)} type='text' className='w-100 bg-white rounded-2' id="outlined-basic" label="Enter your name" variant="outlined" />
        {nameErr && <p className='text-danger text-start fs-4'> Name is empty </p> }
      </div>
      <div className='m-5'>
      <h1 className='text-start'>Email</h1>
      <TextField size='small' label="email"  value={email} onChange={(e) => setEmail(e.target.value)} type='email' className='w-100 bg-white rounded-2' id="outlined-basic" variant="outlined" />
      {emailErr && <p className='text-danger text-start fs-4'> Email is empty. </p> }
      </div>
      <div className='m-5'>
      <h1 className='text-start'>Age</h1>
      <TextField size='small' value={Age} onChange={(e) => setAge(e.target.value)} type='number' className='w-100 bg-white rounded-2' id="outlined-basic" label="Enter your age" variant="outlined" />
      {ageErr &&<p className='text-danger text-start fs-4'> Age is empty</p>}
      </div>
      <div className='my-3'>
      <Button variant="contained" type='submit' className='btn-'>Contained</Button>
      </div>

      </form>

    </div>
    </>
  )
}

export default FormComponent