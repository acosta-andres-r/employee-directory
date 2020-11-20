import React, { useEffect, useState } from 'react';

import './App.css';
import Header from './components/Header/index';
import Search from './components/Search/index';
import Table from './components/Table/index';
import API from "./utils/API";
import moment from "moment";

function App() {

  const [employees, setEmployees] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    API.fetchEmployeers()
      .then(employees => {
        setEmployees(employees);
        setOriginalData(employees);
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  const sortHandler = (event) => {

    const sort = event.target.getAttribute("data-name");
    const isAscending = !event.target.classList.contains("th-sort-asce");

    document.querySelectorAll('[data-name]').forEach(elem => {
      elem.classList.remove("th-sort-asce");
      elem.classList.remove("th-sort-desc");
    });

    let emp = [...employees]

    emp.sort((a, b) => {
      var nameA = sort !== "dob" ?
        a[sort].toUpperCase() :
        moment(a[sort]);

      var nameB = sort !== "dob" ?
        b[sort].toUpperCase() :
        moment(b[sort]);

      if (isAscending ? nameA < nameB : nameA > nameB) { return -1; }
      if (isAscending ? nameA < nameB : nameA > nameB) { return 1; }
      return 0; // names must be equal
    });

    event.target.classList.add(isAscending ? "th-sort-asce" : "th-sort-desc")

    setEmployees([...emp])
  }

  const searchHandler = (event) => {
    const search = event.target.value;

    const searchedEmployees = originalData.filter(elem => {
      return (
        elem.name.includes(search)
        || elem.phone.includes(search)
        || elem.email.includes(search)
        || elem.dob.includes(search)
      )
    })

    setEmployees(searchedEmployees);
  }

  return (
    <div className="App">
      <Header />
      <Search search={searchHandler} />
      <Table employees={employees} sort={sortHandler} />
    </div>
  );

}

export default App;
