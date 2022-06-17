import React, { useState } from "react";
import("../assets/css/add.css");

function Add() {
  const [adduser, setAdduser] = useState({
    product: "",
    quantity: "",
    id: "",
    description: "",
  });

  const setproduct = (e) => {
    const { name, value } = e.target;
    setAdduser((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  };

  const addData = async (e) => {
    console.log(adduser);
    e.preventDefault();

    const { product, quantity, id, description } = adduser;

    const connectToBackEnd = await fetch(
      "https://allcartt.herokuapp.com/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product,
          quantity,
          id,
          description,
        }),
      }
    );
    console.log("in add function");
    const input = await connectToBackEnd.json();

    if (connectToBackEnd.status === 403 || !input) {
      alert("ERROR, YOU MAY HAVE NOT FILLED THE FORM PROPERLY");
      console.log("ERROR IS addData FUNCTION OF ADD FRONT-END");
    } else {
      alert("YOUR FOOD-ITEM HAS BEEN ADDED SUCCESSFULLY");
    }
  };
  return (
    <div className="add_container">
      <form className="pform">
        <h1>Add Product</h1>
        <h4>fill in the essentials of product</h4>
        <div className="pname">
          <label htmlFor="prdct_name">Name:</label>
          <input
            defaultValue={adduser.product}
            name="product"
            onChange={setproduct}
            id="prdct_name"
            type="text"
          />
        </div>
        <div className="pqty">
          <label htmlFor="qty_name">Quantity(kg)</label>
          <input
            defaultValue={adduser.quantity}
            name="quantity"
            onChange={setproduct}
            id="qty_name"
            type="number"
          />
        </div>
        <div className="pprice">
          <label htmlFor="_price">ProductId:</label>
          <input
            defaultValue={adduser.id}
            name="id"
            onChange={setproduct}
            id="_price"
            type="number"
          />
        </div>
        <div className="bb">
          <label htmlFor="_bb">Item Description:</label>
          <input
            defaultValue={adduser.description}
            name="description"
            onChange={setproduct}
            id="_bb"
            type="text"
          />
        </div>
        <button
          type="submit"
          onClick={addData}
          className=" addbtn btn btn-danger"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Add;
