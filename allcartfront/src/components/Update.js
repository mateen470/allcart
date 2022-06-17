import React, { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import("../assets/css/update.css");

function Update() {
  const goBack = useNavigate();

  const [updateuser, setUpdateuser] = useState({
    product: "",
    quantity: "",
    id: "",
    description: "",
  });

  const updateproduct = (e) => {
    const { name, value } = e.target;
    setUpdateuser((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  };

  let { id } = useParams("");

  const fillPreviousData = async () => {
    const previousData = await fetch(`https://allcartt.herokuapp.com/view/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await previousData.json();

    if (previousData.status === 422 || !data) {
      console.log("PREVIOUS DATA TO FILL THE FORM CANNOT GET");
    } else {
      setUpdateuser(data);
    }
  };
  useEffect(() => {
    fillPreviousData();
  }, []);

  const updateData = async (e) => {
    e.preventDefault();

    const { product, quantity, id, description } = updateuser;

    const updateDataInBackEnd = await fetch(
      `https://allcartt.herokuapp.com/update/${id}`,
      {
        method: "PUT",
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
    const updatedDataInBackEnd = await updateDataInBackEnd.json();
    if (updateDataInBackEnd.status === 422 || !updatedDataInBackEnd) {
      console.log("UPDATE PROCESS FAILED");
      alert("ERROR: CANNOT UPDATE THE DATA");
    } else {
      alert("DATA UPDATED SUCCESSFULLY");
      goBack("/homeadmin");
    }
  };
  return (
    <div className="update_container">
      <form className="uform">
        <h1>Update</h1>
        <h4>fill the form to update the product</h4>
        <div className="upname">
          <label htmlFor="uprdct_name">Name:</label>
          <input
            defaultValue={updateuser.product}
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
          <label htmlFor="u_price">ProductId:</label>
          <input
            defaultValue={updateuser.id}
            name="price"
            onChange={updateproduct}
            id="u_price"
            type="number"
          />
        </div>
        <div className="ubb">
          <label htmlFor="u_bb">Description:</label>
          <input
            defaultValue={updateuser.description}
            name="description"
            onChange={updateproduct}
            id="u_bb"
            type="text"
          />
        </div>
        <button
          type="submit"
          onClick={updateData}
          className=" ubtn btn btn-dark"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default Update;
