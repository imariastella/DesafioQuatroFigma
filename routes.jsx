import { Route, Routes } from "react-router-dom";
import { Login } from "./src/Pages/Login";
import { AddTask } from "./src/Pages/Login/AddTask";
import { TodoTask } from "./src/Pages/Login/TodoTask";

const MyRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/addtask" element={<AddTask />} />
      <Route path="/todotask" element={<TodoTask />} />
    </Routes>
  );
};
export { MyRoutes };
