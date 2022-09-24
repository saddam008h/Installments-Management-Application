import React from 'react'

import Table from 'react-bootstrap/Table';
import OneInstallment from './OneInstallment';


function StripedRowExample(props) {
    let id = 1;

  return (
    <div>
    
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Paid (Rs)</th>
          <th>Remaining (Rs)</th>
        </tr>
      </thead>
      <tbody>
        {props.installments.map(({_id, paid,date}) => {
            return <OneInstallment key={_id} id={id++} date={date.slice(4,15)} paid={paid} remaining=""/>
        })}
      </tbody>
    </Table>
    </div>

  );
}

export default StripedRowExample;