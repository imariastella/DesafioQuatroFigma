import { Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login";
import { AddTask } from "./Pages/AddTask";
import { TodoTask } from "./Pages/TodoTask";
const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/addtask" element={<AddTask />} />
      <Route path="/todotask" element={<TodoTask />} />
    </Routes>
  );
};
export { MyRoutes };
