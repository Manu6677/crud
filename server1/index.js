const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const UserCreds = require("./models/Users");
const userCreds = require("./models/Users");

const app = express();
app.use(cors());
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 8000;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://manucrud:manucrud555@cluster0.hqoak4g.mongodb.net/User?retryWrites=true&w=majority"
  );
  console.log("database Connected");
}

app.post("/newuser", async (req, res) => {
  // const { name, email, age } = req.body;
  console.log(req.body);
  try {
    const data = await userCreds.create(req.body);
    console.log(data);
    res.status(200).json({ data, alert: true });
  } catch (err) {
    res.status(200).json(err.message);
  }
});

app.get("/", (req, res) => {
  console.log("hello get");
  // try {
  //   const allData = await userCreds.find({});
  //   console.log(allData);
  //   res.status(200).json({ allData, alert: true });
  // } catch (err) {
  //   res.status(404).json(err.message);
  // }
  userCreds
    .find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getuser/:id", (req, res) => {
  const id = req.params.id;
  userCreds
    .findById({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.delete("/deleteuser/:id", (req, res) => {
  const id = req.params.id;
  userCreds
    .findByIdAndDelete(id)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.put("/updateuser/:id", (req, res) => {
  const { id } = req.params.id;
  userCreds
    .findByIdAndUpdate(
      { _id: id },
      { name: req.body.name, email: req.body.email, age: req.body.age }
    )
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.listen(PORT, () => {
  console.log("server is running" + PORT);
});

//manucrud555
//manucrud
