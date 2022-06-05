import React, { useState } from "react";
import("../assets/css/View.css");

function View() {
  const [viewuser, setViewuser] = useState([]);
  return (
    <div className="view_container">
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h2>Product Name</h2>
            <h3> {viewuser.product}</h3>
          </li>
          <li className="list-group-item">
            <h2>Quantity in Stocks (kg.)</h2>
            <h3> {viewuser.quantity}</h3>
          </li>
          <li className="list-group-item">
            <h2>Price(Rs.)</h2>
            <h3> {viewuser.price}</h3>
          </li>
          <li className="list-group-item">
            <h2>BestBefore Date.</h2>
            <h3> {viewuser.bestbefore}</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default View;
