import React from "react";
import("../assets/css/start.css");

function Start() {
  return (
    <div className="main_container">
      <h1 className="startH1">SHOPPING MADE EASY</h1>
      <span>shop fresh to eat fresh</span>
      <button type="button" class="btn btn-success">
        <a href="/signup"> Get Started</a>
      </button>
    </div>
  );
}

export default Start;
