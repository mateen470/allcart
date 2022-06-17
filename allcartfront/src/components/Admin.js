import React from 'react'
import { useState } from "react";
import axios from 'axios'
import ("../assets/css/adminpanel.css");

function Admin() {
  const [adminuser, setAdminuser] = useState({
    Name: "",
    Email: "",
    password: "",
  });

  const setadmin = (e) => {
    const { name, value } = e.target;
    setAdminuser((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  };

  return (
    <div className="admin_container">
      <form className="adminForm">
        <h1>Admin LogIn</h1>
        <h4>fill in the essentials</h4>
        <div className="adminname">
          <label htmlFor="admn_name">Name:</label>
          <input defaultValue={adminuser.Name} name="name" onChange={setadmin} id="admn_name"  type='text'/>
        </div>
        <div className="adminemail">
          <label htmlFor="admn_email">E-mail:</label>
          <input
            defaultValue={adminuser.Email}
            name="email"
            onChange={setadmin}
            id="admn_email"
            type='email'
          />
        </div>
        <div className="adminpass">
          <label htmlFor="admn_pass">Password:</label>
          <input
            defaultValue={adminuser.password}
            name="password"
            onChange={setadmin}
            id="admn_pass"
            type='password'
          />
        </div>
        <button type="button" className="adminbtn btn btn-danger" >Admin SignIn</button>
      </form>
    </div>
  );
}

export default Admin