import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import("../assets/css/home.css");

function Home() {
  const [hproducts, setHproducts] = useState([]);
  return (
    <>
      <div className="home_container">
        <div className="lgin_admin">
          <NavLink to="/admin">
            <h3> LogIn as Admin</h3>
          </NavLink>
        </div>
        <NavLink to="/add">
          <button type="button" className="hbtn btn">
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
                <th scope="col">ProductId</th>
                <th scope="col">BestBefore.</th>
                <th scope="col">Action.</th>
              </tr>
            </thead>
            <tbody>
              {hproducts.map((pr, i) => {
                <tr className="table-dark">
                  <th scope="row">{i + 1}</th>
                  <td>{pr.product}</td>
                  <td>{pr.quantity}</td>
                  <td>{pr.id}</td>
                  <td>{pr.bestbefore}</td>
                  <td>
                    <NavLink className="actspan" id="viewbtn" to="/view">
                      View
                    </NavLink>
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

export default Home;
