import React, { useState } from "react";
import("../assets/css/add.css");

function Add() {
  const [adduser, setAdduser] = useState({
    product: "",
    quantity: "",
    price: "",
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
  return (
    <div className="add_container">
      <form className="pform">
        <h1>Add Product</h1>
        <h4>fill in the essentials of product</h4>
        <div className="pname">
          <label htmlFor="prdct_name">Name:</label>
          <input
            defaultValue={adduser.name}
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
          <label htmlFor="_price">Price.(Rs.):</label>
          <input
            defaultValue={adduser.price}
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
        <button type="button" className=" addbtn btn btn-danger">
          Add
        </button>
      </form>
    </div>
  );
}

export default Add;
