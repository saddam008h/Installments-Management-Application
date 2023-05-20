import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Info from './Info';
import Installments from './Installments';
import AddInstallment from './AddInstallment';
import { useParams } from 'react-router-dom'


function NavTabsExample(props) {
    const [installment, setInstallment] = useState(true);
    const [modalShow, setModalShow] = useState(false);
    const [installmentsArray, setInstallmentArray] = useState([])
    let [userData, setUserData] = useState();
    const [showSave, setShowSave] = useState(false)
    const [isDisable, setDisabled] = useState(true)
    const { id } = useParams();


    const fetchUserData = useCallback(() => {
      axios
        .get('https://baba-sardaar.vercel.app/signup/'+id)
        .then(res =>{ 
          setUserData(res.data)
    })
        .catch(err =>{console.log("error")})  
    }, [id])
    
    const fetchInstallments = useCallback(() => {
      axios
          .get('https://baba-sardaar.vercel.app/paid/'+id)
          .then((res)=>{
            setInstallmentArray(res.data)
          })
        .catch(err => {
          console.log("error")
        })
    }, [id])

    useEffect(() => {
        fetchUserData()
        fetchInstallments()
    }, [fetchUserData, fetchInstallments])
    

    function installmentClick(){
        setInstallment(true);
       
    }
    function infoClick(){
        setInstallment(false);
    
    }

    function newinstallment(){
        setModalShow(true)
    }

    function updateInfo(){
        setShowSave(true);
        setDisabled(false);
    }

  return (

    <div className="container mt-4">
        <AddInstallment show={modalShow}
        onHide={() => setModalShow(false)} modal={setModalShow} fetchInstallments={fetchInstallments} id={id} price={userData?.price} />
    <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
         <Nav.Item>
            <Nav.Link onClick={installmentClick} >Installments</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={infoClick}>Personal info</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title>{userData?.name}</Card.Title>
        
          {installment ? <Installments installments={installmentsArray}/> : <Info userData={userData} isDisable={isDisable} setDisabled = {setDisabled} setShowSave={setShowSave} showSave={showSave}/>}
        <div>
        <Button variant="primary" className='mt-2' onClick={installment ? newinstallment : updateInfo}>{installment?"Add New Installment":"Update Information"}</Button>
        </div>
      </Card.Body>

    </Card>
    </div>
  );
}

export default NavTabsExample;

