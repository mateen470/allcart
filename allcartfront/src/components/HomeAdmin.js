import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import("../assets/css/adminhome.css");

function HomeAdmin() {
  const [products, setProducts] = useState([]);

  const Show = async () => {
    const showAll = await fetch("https://allcartt.herokuapp.com/homeadmin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const showData = await showAll.json();
    if (showAll.status === 422 || !showData) {
      alert("CANNOT GET THE TABLE DATA");
      console.log("Show function in homeadmin component failed");
    } else {
      setProducts(showData);
    }
  };
  useEffect(() => {
    Show();
    console.log(products)
  }, []);

  const removeUser = async (id) => {
    const res2 = await fetch(`https://allcartt.herokuapp.com/remove/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deldata = await res2.json();
    console.log(deldata);

    if (res2.status === 422 || !deldata) {
      alert("CANNOT DELETE DATA");
      console.log("REMOVEUSER FUNCTION FAILED IN HOMEADMIN");
    } else {
      // THE setUser IS THE VARIABLE DEFINED IN USESTATE TO UPDATE OR STORE THE NEW VALUE, data IS BEING TO THE setUser
      alert("DELETED SUCCESSFULLY!");
      Show();
    }
  };
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
                <th scope="col">ProductId</th>
                <th scope="col">Description.</th>
                <th scope="col">Action.</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => {
                return(
                  <>
                <tr className="table-secondary">
                  <th scope="row">{i + 1}</th>
                  <td>{p.product}</td>
                  <td>{p.quantity}</td>
                  <td>{p.id}</td>
                  <td>{p.description}</td>
                  <td>
                    <NavLink
                      className="actionspan"
                      id="viewbtn"
                      to={`/view/${p._id}`}
                    >
                      View
                    </NavLink>
                    <NavLink
                      className="actionspan"
                      id="updtbtn"
                      to={`/update/${p._id}`}
                    >
                      Update
                    </NavLink>
                    <a
                      onClick={() => removeUser(p._id)}
                      className="actionspan"
                      id="remvbtn"
                    >
                      Remove
                    </a>
                  </td>
                </tr>;
                </>)
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default HomeAdmin;
