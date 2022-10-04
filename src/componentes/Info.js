import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import axios from 'axios'

export default function Info(props) {
    let {name, cnic, phone, installment_amount, price, total_installments, address = "", product = ""} = props.userData;
    const [Name , setName] = useState(name);
    const [Cnic , setCnic] = useState(cnic);
    const [Phone , setPhone] = useState(phone);
    const [Installment_amount , setInstallment_amount] = useState(installment_amount);
    const [Price , setPrice] = useState(price);
    const [Total_installments , setTotal_installments] = useState(total_installments);
    const [Address , setAddress] = useState(address);
    const [Product,setProduct] = useState(product);

    const formData = {name:Name,cnic:Cnic,phone:Phone,installment_amount:Installment_amount,price:Price, total_installments:Total_installments,address:Address,product:Product }
    
    function saveInfo(e) {
        e.preventDefault();
        axios
        .put("https://babasardaarserver.herokuapp.com/signup/"+props.userData._id,formData)
        .then((res)=>{
            props.setShowSave(false);
          
            props.setDisabled(true);
        })
      .catch(err => {
        console.log("error")
      })
    }

  return (
    <div>
        <Form onSubmit={saveInfo}>
        <Form.Group className="mb-1">
            <Form.Label className='mb-1'>Full Name</Form.Label>
            <Form.Control value={Name}  disabled = {props.isDisable} onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-1">
            <Form.Label className='mb-1'>CNIC Number</Form.Label>
            <Form.Control value={Cnic} disabled = {props.isDisable} onChange={(e)=>setCnic(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-1">
            <Form.Label className='mb-1'>Phone</Form.Label>
            <Form.Control value={Phone} disabled = {props.isDisable} onChange={(e)=>setPhone(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-1">
            <Form.Label className='mb-1'>Address</Form.Label>
            <Form.Control value={Address} disabled = {props.isDisable} onChange={(e)=>setAddress(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-1">
            <Form.Label className='mb-1'>Product name</Form.Label>
            <Form.Control value={Product} disabled = {props.isDisable} onChange={(e)=>setProduct(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-1">
            <Form.Label className='mb-1'>Product Price</Form.Label>
            <Form.Control value={Price} disabled = {props.isDisable} onChange={(e)=>setPrice(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-1">
            <Form.Label className='mb-1'>Amount of one installment</Form.Label>
            <Form.Control value={Installment_amount} disabled = {props.isDisable} onChange={(e)=>setInstallment_amount(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-1">
            <Form.Label className='mb-1'>Total installments</Form.Label>
            <Form.Control value={Total_installments} disabled = {props.isDisable} onChange={(e)=>setTotal_installments(e.target.value)}/>
        </Form.Group>
        {props.showSave && <Button variant = "success" className='mt-1' type="submit"> Save </Button>}
        </Form>
    </div>
  )
}

