import React from 'react';

import TableRow from '../TableRow/index'
import './index.css'

function Table(props) {

  const renderTableRow = props.employees.map((employee, index) => {
    return (
      <TableRow
        employee={employee}
        key={employee.id}
        index={index}
      />
    )
  })

  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th
            scope="col"
            onClick={(event) => props.sort(event)}
            className="table-sortable"
            data-name="name"
          >Name</th>
          <th
            scope="col"
            onClick={(event) => props.sort(event)}
            className="table-sortable"
            data-name="phone"
          >Phone</th>
          <th
            scope="col"
            onClick={(event) => props.sort(event)}
            className="table-sortable"
            data-name="email"
            >Email</th>
          <th
            scope="col"
            onClick={(event) => props.sort(event)}
            className="table-sortable"
            data-name="dob"
            >DOB</th>
        </tr>
      </thead>
      <tbody>
        {renderTableRow}
      </tbody>
    </table>
  );
}

export default Table;