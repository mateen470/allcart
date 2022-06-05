import React, { useState } from "react";
import("../assets/css/update.css");

function Update() {
  const [updateuser, setUpdateuser] = useState({
    product: "",
    quantity: "",
    price: "",
    bestbefore: "",
  });

  const updateproduct = (e) => {
    const { name, defaultValue } = e.target;
    setUpdateuser((previousValue) => {
      return {
        ...previousValue,
        [name]: defaultValue,
      };
    });
  };
  return (
    <div className="update_container">
      <form className="uform">
        <h1>Update</h1>
        <h4>fill the form to update the product</h4>
        <div className="upname">
          <label htmlFor="uprdct_name">Name:</label>
          <input
            defaultValue={updateuser.name}
            name="product"
            onChange={updateproduct}
            id="uprdct_name"
            type="text"
          />
        </div>
        <div className="upqty">
          <label htmlFor="uqty_name">Quantity(kg)</label>
          <input
            defaultValue={updateuser.quantity}
            name="quantity"
            onChange={updateproduct}
            id="uqty_name"
            type="number"
          />
        </div>
        <div className="upprice">
          <label htmlFor="u_price">Price.(Rs.):</label>
          <input
            defaultValue={updateuser.price}
            name="price"
            onChange={updateproduct}
            id="u_price"
            type="number"
          />
        </div>
        <div className="ubb">
          <label htmlFor="u_bb">Best Before:</label>
          <input
            defaultValue={updateuser.bestbefore}
            name="bestbefore"
            onChange={updateproduct}
            id="u_bb"
            type="date"
          />
        </div>
        <button type="button" className=" ubtn btn btn-dark">
          Update
        </button>
      </form>
    </div>
  );
}

export default Update;
