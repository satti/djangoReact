import React, { useState } from 'react'
import Button from '../components/Button'
import InputBox from '../components/InputBox'
import { useNavigate, } from 'react-router-dom';
import axios from 'axios';
// import Header from '../components/Header'
const StudentEntry = () => {
    const [sname, setSname] = useState("");
    const [fname,setFname] = useState("");
    const [address,setAddress] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault()
        try{
            axios('http://localhost:3537/api/create/',
            {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            data: JSON.stringify({sname:sname,fname:fname,address:address}),
        });
   navigate('/');
    }
    
    catch(error)
    {
        console.log("Error occured");
    }

};
  return (
    <div className='container'>
    <h1>Students Entry Form</h1>
    <form className='form-container'>
        <InputBox label="Student Name"
        placeholder="Enter Name...."
        onChange={(e)=>setSname(e.target.value)}
        value={sname}
        type='text'
        />

    <InputBox label="Father Name"
        placeholder="Enter the value...."
        onChange={(e)=>setFname(e.target.value)}
        value={fname}
        type='text'
        />  

  <InputBox label="Address"
        placeholder="Enter Your Address...."
        onChange={(e)=>setAddress(e.target.value)}
        value={address}
        type='text'
        />

        <Button
        style={{ fontSize: "1.2rem", innerHeight: "1.5rem" }}
        type="button"  onClick={handleSubmit}> 
      Submit
      </Button>
    </form>
    </div>
  )
}

export default StudentEntry
