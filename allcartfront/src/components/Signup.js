import React from "react";
import { useState } from "react";
import("../assets/css/signup.css");

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const setData = (e) => {
    const { name, defaultValue } = e.target;
    setUser((previousValue) => {
      return {
        ...previousValue,
        [name]: defaultValue,
      };
    });
  };

  return (
    <div className="signup_container">
      <form className="main_form">
        <h1>Sign Up</h1>
        <h4>please provide you details</h4>
        <div className="forName">
          <label htmlFor="_name">Name:</label>
          <input defaultValue={user.name} name="name" onChange={setData} id="_name" type='text'/>
        </div>
        <div className="forEmail">
          <label htmlFor="_email">E-mail:</label>
          <input
            defaultValue={user.email}
            name="email"
            onChange={setData}
            id="_email"
            type='email'
          />
        </div>
        <div className="forPass">
          <label htmlFor="_pass">Password:</label>
          <input
            defaultValue={user.pass}
            name="password"
            onChange={setData}
            id="_pass"
            type='password'
          />
        </div>
        <button type="button" className=" sgnupbtn btn btn-danger" >Register</button>
      <div className="exist_acc">
        <h4>already have an account?</h4>
        <a href="/login">LogIn</a>
      </div>
      </form>
    </div>
  );
}

export default Signup;
