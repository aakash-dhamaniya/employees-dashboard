import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./card.scss";
function Card({ employee, onDelete, onEdit, ischeck, setIdsTobeDelted }) {
  const navigate = useNavigate();
  function deleteHandler(e) {
    e.stopPropagation();
    onDelete(employee.id);
  }
  function editHandler(e) {
    e.stopPropagation();
  }
  function check(e) {
    e.stopPropagation();
    setIdsTobeDelted(employee.id);
  }
  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/employee/${employee.id}`);
      }}
    >
      <div className="name-check">
        <div>
          <h2>{employee.name}</h2>
        </div>
        {ischeck && (
          <div>
            <input type="checkbox" onClick={check} />
          </div>
        )}
      </div>

      <p>ID: {employee.id}</p>
      <p>Salary: {employee.employee_salary}</p>
      <p>Age: {employee.employee_age}</p>
      <button onClick={deleteHandler}>Delete</button>

      <button onClick={editHandler}>Edit</button>
    </div>
  );
}

export default Card;
