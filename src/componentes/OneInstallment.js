import React from 'react'


export default function OneInstallment(props) {
  return (

    <tr>
    <td>{props.id}</td>
    <td>{props.date}</td>
    <td>{props.paid}</td>
    <td>{props.remaining}</td>
  </tr>

  )
}
