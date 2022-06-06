import React, { useState } from "react";
import("../assets/css/add.css");

function Add() {
  const [adduser, setAdduser] = useState({
    product: "",
    quantity: "",
    id: "",
    bestbefore: "",
  });

  const setproduct = (e) => {
    const { name, defaultValue } = e.target;
    setAdduser((previousValue) => {
      return {
        ...previousValue,
        [name]: defaultValue,
      };
    });
  };

  const addData = async (e) => {
    console.log(adduser);
    e.preventDefault();

    const { product, quantity, id, bestbefore } = adduser;

    const connectToBackEnd = await fetch("http://localhost:3001/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product,
        quantity,
        id,
        bestbefore,
      }),
    });

    const input = await connectToBackEnd.json();

    if (connectToBackEnd.status === 422 || !input) {
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
            name="price"
            onChange={setproduct}
            id="_price"
            type="number"
          />
        </div>
        <div className="bb">
          <label htmlFor="_bb">Best Before:</label>
          <input
            defaultValue={adduser.bestbefore}
            name="bestbefore"
            onChange={setproduct}
            id="_bb"
            type="date"
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
