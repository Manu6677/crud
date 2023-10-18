import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    // const Userinfo = axios
    //   .get("http://localhost:8000")
    //   .then((result) => setUser(result.data))
    //   .catch((err) => console.log(err));
    // console.log(Userinfo);

    getData();
    // const allData = fetch("http://localhost:8000")
    //   .then((data) => data.json())
    //   .then((post) => post.name)
    //   .catch((err) => console.log(err));
    // console.log(allData);
  }, []);

  async function getData() {
    const allData = await fetch("http://localhost:8000");
    // console.log(allData);
    const alldataRes = await allData.json();
    console.log(alldataRes);
    setUser(alldataRes);
  }

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/deleteuser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <table>
        <thead>
          <tr className="space-x-3">
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Age</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {user.map((it) => {
            return (
              <tr>
                <td className="p-3">{it.name}</td>
                <td className="p-3">{it.email}</td>
                <td className="p-3">{it.age}</td>
                <td className="p-3 space-x-3">
                  <Link to={`/update/${it._id}`}>Update</Link>
                  <button onClick={(e) => handleDelete(it._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <Link to="create" className="p-3">
          Add
        </Link>
      </div>
    </div>
  );
};

export default User;
