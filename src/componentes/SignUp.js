import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';

function BasicExample() {
    
    const [form, setForm] =  useState({});
    const [alert, setAlert] = useState(false);
    
    const setField = (field,value)=>{
        setForm({
            ...form,
            [field] : value
        })
    }

    const onsubmit = event => {
        event.preventDefault()
        axios
          .post('https://baba-sardaar.vercel.app/signup', form)
          .then(res => {
            if (res.status ===200) {
            
            setAlert(true);
            // const fields = [ 'total'name', 'cnic', 'phone', 'address', 'product', 'price', 'installment_amount',_installments']
            // for (let field in fields) {
            //   setForm(field, "")
            // }  
          }})
        .catch(err => {
          console.log("error")
        })
    }

setTimeout(() => {
    setAlert(false);
}, 4000);
    
  return (
    <>
    {alert &&  <Alert variant="success" className='mt-2 mb-0' set>
      <b>Successfully Added New Customer!</b>
      </Alert>}
    <h2 className="text-center mt-3" >SignUp Form</h2>
    <div className="container">
    <Form onSubmit={onsubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Full Name" required onChange={(e) =>{setField('name',e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="CNIC Number" required onChange={(e) =>setField('cnic',e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Phone Number" required onChange={(e) =>setField('phone',e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Address" onChange={(e) =>setField('address',e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Product Name" onChange={(e) =>setField('product',e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Total Price of Product" required onChange={(e) =>setField('price',e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Amount of One Installment" required onChange={(e) =>setField('installment_amount',e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Total Installments" required onChange={(e) =>setField('total_installments',e.target.value)} />
      </Form.Group>
   
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </>
  );
}

export default BasicExample;
