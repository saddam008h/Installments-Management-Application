import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState} from 'react';
import axios from 'axios';

export default function AddInstallment(props) {
   
    const [value,setValue]= useState('');

    function onPaidChange(e){
        setValue(e.target.value);
    }
  
  
    function submitPaid(event){
        event.preventDefault()
        
        axios
          .post('https://babasardaarserver.herokuapp.com/paid', {paid:value, id:props.id, price:props.price})
          .then((e)=>{
            props.fetchInstallments()
            props.modal(false)
          })
        .catch(err => {
          console.log("error")
        })
    }

  return (
    <div>
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Installment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
        <Form onSubmit={submitPaid}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="number" placeholder="Enter Paid Amount" onChange={onPaidChange} />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Add New
      </Button>
    </Form>
        </div>
      </Modal.Body>
     
    </Modal>
    </div>
  );
}
