import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import("../assets/css/home.css");

function Home() {
  const [hproducts, setHproducts] = useState([]);
  const show = async () => {
    const showall = await fetch(`https://allcartt.herokuapp.com/home`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const showdata = await showall.json();
    if (showall.status === 422 || !showdata) {
      alert("CANNOT GET THE TABLE DATA");
      console.log("Show function in home component failed");
    } else {
      setHproducts(showdata);
    }
  };
  useEffect(() => {
    show();
  }, []);

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
                <th scope="col">Description.</th>
                <th scope="col">Action.</th>
              </tr>
            </thead>
            <tbody>
              {hproducts.map((pr, i) => {
                return(<>
                <tr className="table-secondary">
                  <th scope="row">{i + 1}</th>
                  <td>{pr.product}</td>
                  <td>{pr.quantity}</td>
                  <td>{pr.id}</td>
                  <td>{pr.description}</td>
                  <td>
                    <NavLink
                      className="actspan"
                      id="viewbtn"
                      to={`/view/${pr._id}`}
                    >
                      View
                    </NavLink>
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

export default Home;
