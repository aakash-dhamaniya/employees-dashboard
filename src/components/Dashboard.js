import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";
import axios from "axios";
import "./home.scss";
function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [ischeck, setIsCheck] = useState(false);
  const [deleteIds, setDeleteIds] = useState([]);
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        console.log("fetching");
        const response = await axios.get(
          " https://jsonplaceholder.typicode.com/users"
        );
        setEmployees(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchEmployees();
  }, []);

  const handleDelete = (id) => {
    console.log("delete call hua", id);
    const newData = employees.filter((item) => item.id !== id);
    console.log("newData", newData);
    setEmployees(newData);
  };
  const handleEdit = (id) => {};
  function enablecheck() {
    setIsCheck((check) => !check);
    setDeleteIds([]);
  }
  function setIdsTobeDelted(id) {
    setDeleteIds([...deleteIds, id]);
  }
  const deleteAll = () => {
    console.log("deleted All");
    let newData = employees;
    for (let i = 0; i < deleteIds.length; i++) {
      newData = newData.filter((item) => item.id !== deleteIds[i]);
    }
    console.log("newData", newData);
    setEmployees(newData);
  };
  return (
    <div className="home">
      <div className="em-s">
        <h1>Employee Dashboard</h1>
        <div className="s-b">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <button onClick={enablecheck}>
            {ischeck ? "Un Select all" : "Select multiple"}
          </button>
          {ischeck && <button onClick={deleteAll}>Delete all</button>}
        </div>
      </div>
      <div className="employee">
        {employees
          .filter((employee) => employee.id.toString().includes(searchTerm))
          .map((employee) => (
            <Card
              key={employee.id}
              employee={employee}
              onDelete={handleDelete}
              onEdit={handleEdit}
              ischeck={ischeck}
              deleteAll={deleteAll}
              setIsCheck={setIsCheck}
              setIdsTobeDelted={setIdsTobeDelted}
            />
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
