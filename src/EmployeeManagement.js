import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [position, setPosition] = useState('');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('https://node-employeeapi.onrender.com/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://node-employeeapi.onrender.com/employees', {
        name,
        age,
        position,
      });
      console.log('New employee added:', response.data);
      fetchEmployees();
      setName('');
      setAge('');
      setPosition('');
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <div>
      <h1>Employee Management System</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <button type="submit">Add Employee</button>
      </form>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            {employee.name}, {employee.age}, {employee.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeManagement;
