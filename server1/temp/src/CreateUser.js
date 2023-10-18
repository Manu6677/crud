import React, { useState } from "react";
import axios from "axios";
const CreateUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

  const Submit = async (e) => {
    e.preventDefault();

    try {
      const data = await fetch("http://localhost:8000/newuser", {
        method: "POST",
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
          <h2>Add User</h2>
          <div>
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
