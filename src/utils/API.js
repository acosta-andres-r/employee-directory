import axios from "axios";
import moment from "moment";

// Export an object containing methods we'll use for accessing the random user API
export default {
  fetchEmployeers: function () {
    return axios
      .get(`https://randomuser.me/api/?results=150&inc=picture,name,phone,cell,email,dob,id&noinfo&nat=us`)
      .then(res => {

        const employees = res.data.results;
        console.log(employees);

        console.log(moment(employees[0].dob.date).format("MM-DD-YYYY"));

        return employees.map(employee => {
          return {
            name: `${employee.name.first} ${employee.name.last}`,
            phone: employee.phone,
            email: employee.email,
            dob: moment(employee.dob.date).format("MM-DD-YYYY"),
            picture: employee.picture.medium,
            id: employee.id.value
          };
        });
      });
  }
};
