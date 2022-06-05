import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import("../assets/css/adminhome.css");

function HomeAdmin() {
  const [products, setProducts] = useState([]);
  return (
    <>
      <nav className="navadmin">
        <div>
          <span>
            <h1 className="navH1">Admin Panel</h1>
          </span>
        </div>
      </nav>
      <div className="adminhome_container">
        <NavLink to="/add">
          <button type="button" className="adminhomebtn btn">
            Add Product
          </button>
        </NavLink>
        <div className="main_table">
          <table className="table table-secondary">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price.</th>
                <th scope="col">BestBefore.</th>
                <th scope="col">Action.</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => {
                <tr className="table-dark">
                  <th scope="row">{i + 1}</th>
                  <td>{p.product}</td>
                  <td>{p.quantity}</td>
                  <td>{p.price}</td>
                  <td>{p.bestbefore}</td>
                  <td>
                    <NavLink className="actionspan" id="viewbtn" to="/view">
                      View
                    </NavLink>
                    <NavLink className="actionspan" id="updtbtn" to="/update">
                      Update
                    </NavLink>
                    <a className="actionspan" id="remvbtn">
                      Remove
                    </a>
                  </td>
                </tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default HomeAdmin;
