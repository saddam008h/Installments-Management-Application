import React from 'react';
import { useNavigate } from "react-router-dom";


export default function Header() {
  let navigate = useNavigate()

  function onSignUpClick() {
    navigate('/signup')
  }


  return (
    <>
<nav className="navbar navbar-expand-lg bg-secondary sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Baba Sardaar Corporation</a>
    
         
      
    <button type="button" className="btn btn-primary" onClick={onSignUpClick}>Add New</button>
  </div>
  
</nav>

    </>
  )
}
