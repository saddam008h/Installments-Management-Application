import React from 'react';
import './ContactList.css';
import { useNavigate } from "react-router-dom";




export default function ContactList(props) {
  let navigate = useNavigate()
  function HandleClick(){
      navigate(`/user/${props.id}`); 
  }

  return (
    <>
    
    <div className='container w-75 border rounded mt-3 d-flex contact_list' onClick={HandleClick}>
      {/* <i class="fa-solid fa-user align-self-center"></i> */}
      <div>
        <h4 className='m-0 mt-2'>{props.name}</h4>
        <p className='px-2 m-0 fs-6 lh-sm'>Phone: {props.phone}</p>
        <p className='px-2 m-0 fs-6 lh-sm mb-2'>CNIC: {props.cnic}</p>
      </div>
      <div className="ms-auto">
      <p className='mt-3 mb-0'>Remaining: </p>
      <p className='my-0 mb-0'>Total pay: {props.price}</p>
      
      </div>
      

    </div>
    </>
  )
}
