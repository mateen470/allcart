import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import("../assets/css/View.css");

function View() {
  const [viewuser, setViewuser] = useState([]);

  const { id } = useParams("");

  const showSingleRecord = async () => {
    const data = await fetch(`https://allcartt.herokuapp.com/view/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const viewData = await data.json();

    if (data.status === 422 || !viewData) {
      console.log("FILLING THE FORM OF VIEW PAGE FAILED");
    } else {
      setViewuser(viewData);
    }
  };
  useEffect(() => {
    showSingleRecord();
  }, []);

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
            <h2>ProductId</h2>
            <h3> {viewuser.id}</h3>
          </li>
          <li className="list-group-item">
            <h2>Description</h2>
            <h3> {viewuser.description}</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default View;
