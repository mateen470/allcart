import React from 'react'
import { useState } from "react";
import axios from 'axios'
import ("../assets/css/login.css");

function Login() {
  const [lginuser, setLginuser] = useState({
    Name: "",
    Email: "",
    password: "",
  });

  const setdata = (e) => {
    const { name, value } = e.target;
    setLginuser((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  };

  return (
    <div className="login_container">
      <form className="loginForm">
        <h1>LogIn</h1>
        <h4>fill in the essentials</h4>
        <div className="forname">
          <label htmlFor="lgin_name">Name:</label>
          <input defaultValue={lginuser.Name} name="name" onChange={setdata} id="lgin_name" type='text' />
        </div>
        <div className="foremail">
          <label htmlFor="lgin_email">E-mail:</label>
          <input
            defaultValue={lginuser.Email}
            name="email"
            onChange={setdata}
            id="lgin_email"
            type='email'
          />
        </div>
        <div className="forpass">
          <label htmlFor="lgin_pass">Password:</label>
          <input
            defaultValue={lginuser.password}
            name="password"
            onChange={setdata}
            id="lgin_pass"
            type='password'
          />
        </div>
        <button type="button" className=" lginbtn btn btn-dark" >Login</button>
      <div className="admin_acc">
        <h4>login as Admin</h4>
        <a href="/admin">AdminPanel</a>
      </div>
      </form>
    </div>
  );
}

export default Login