import React from 'react';

function TableRow(props) {

  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>
        <img
          src={props.employee.picture}
          alt={props.employee.name}
          className="rounded border border-dark"
        />
      </td>
      <td>{props.employee.name}</td>
      <td>{props.employee.phone}</td>
      <td>{props.employee.email}</td>
      <td>{props.employee.dob}</td>
    </tr>
  )
}

export default TableRow;