import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateUser from "./UpdateUser";
import CreateUser from "./CreateUser";
import User from "./User";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />}></Route>
          <Route path="/create" element={<CreateUser />}></Route>
          <Route path="/update/:id" element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
