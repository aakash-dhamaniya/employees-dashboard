import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function DetailPage() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setEmployee(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEmployee();
  }, [id]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{employee.name}</h2>
      <p>ID: {employee.id}</p>
      <p>Salary: {employee.employee_salary}</p>
      <p>Age: {employee.employee_age}</p>
      <p>Phone: {employee.phone}</p>
      <p>City: {employee.address.city}</p>
    </div>
  );
}

export default DetailPage;
