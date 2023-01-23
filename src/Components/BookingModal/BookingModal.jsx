import React, { useState } from 'react';
import { TextField } from "@mui/material";
import { useForm } from 'react-hook-form';
import './BookingModal.scss';
import { useEffect } from 'react';
import Loading from '../Loading/Loading';

const BookingModal = ( ) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
   
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    const fromSubmitHandler = () =>{
        alert('Appointment Success');
        fetch(`http://localhost:5000/applyEmployee/${email}`, {
            method: "PUT",
            body: JSON.stringify({ firstName, lastName, email, phoneNumber, address }),
            headers: {
              "Content-Type": "application/json",
            },
        })
          .then((res) => res.json())
          .then((data) => {console.log(data);});
    }

    return (
      <div>
        <div className='bookingModal'>
             <form onSubmit={fromSubmitHandler}>
  <div class="form-group">
    <label for="exampleInputEmail1">First Name</label><br />
    <input onChange={e=> setFirstName(e.target.value)} type="text" placeholder='first name'required />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Last Name</label><br />
    <input onChange={e=> setLastName(e.target.value)} type="text" placeholder='last name'required />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Email</label><br />
    <input onChange={e=> setEmail(e.target.value)} type="text" placeholder='email' required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Phone Number</label><br />
    <input onChange={e=> setPhoneNumber(e.target.value)} type="text" placeholder='phone number'required />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Address</label><br />
    <input onChange={e=> setAddress(e.target.value)} type="text" placeholder='address'required/>
  </div>
 <div className='btn-btn'>
 <button type="submit" class="btn btn-primary">Submit</button>
 </div>
</form>
        </div>
      </div>
    );
};

export default BookingModal;