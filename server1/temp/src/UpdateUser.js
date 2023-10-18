import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  console.log(id);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const allData = await fetch("http://localhost:8000/getuser/" + id);
    // console.log(allData);
    const alldataRes = await allData.json();
    console.log(alldataRes);
    setName(alldataRes.name);
    setEmail(alldataRes.email);
    setAge(alldataRes.age);
    console.log(alldataRes?.name);
  }

  const Submit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch("http://localhost:8000/updateuser/" + id, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name, email, age }),
      });

      console.log(data);
      const dataRes = await data.json();
      console.log(dataRes);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div>
        <form onSubmit={Submit}>
          <h2>Update User</h2>
          <div>
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};
export default UpdateUser;
