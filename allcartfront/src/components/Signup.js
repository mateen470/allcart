import React from "react";
import { useState } from "react";
import axios from "axios";
import("../assets/css/signup.css");

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const setData = (e) => {
    const { name, value } = e.target;
    setUser((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  };

  const singUp = async () => {
    const { name, email, pass } = user;
    console.log(user);
    const signingup = await fetch("https://allcartt.herokuapp.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        pass,
      }),
    });
    // console.log("in singup function");
    const inputt = await signingup.json();

    if (signingup.status === 403 || !inputt) {
      alert("ERROR, YOU MAY HAVE NOT FILLED THE FORM PROPERLY");
      console.log("ERROR IS signup FUNCTION OF signup FRONT-END");
    } else {
      alert("USER HAS BEEN ADDED SUCCESSFULLY");
    }
  };

  return (
    <div className="signup_container">
      <form className="main_form">
        <h1>Sign Up</h1>
        <h4>please provide you details</h4>
        <div className="forName">
          <label htmlFor="_name">Name:</label>
          <input
            defaultValue={user.name}
            name="name"
            onChange={setData}
            id="_name"
            type="text"
          />
        </div>
        <div className="forEmail">
          <label htmlFor="_email">E-mail:</label>
          <input
            defaultValue={user.email}
            name="email"
            onChange={setData}
            id="_email"
            type="email"
          />
        </div>
        <div className="forPass">
          <label htmlFor="_pass">Password:</label>
          <input
            defaultValue={user.pass}
            name="pass"
            onChange={setData}
            id="_pass"
            type="password"
          />
        </div>
        <button
          type="button"
          className=" sgnupbtn btn btn-danger"
          onClick={singUp}
        >
          Register
        </button>
        <div className="exist_acc">
          <h4>already have an account?</h4>
          <a href="/login">LogIn</a>
        </div>
      </form>
    </div>
  );
}

export default Signup;
