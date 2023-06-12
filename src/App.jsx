import { MyRoutes } from "./routes";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <MyRoutes />
      </div>
    </BrowserRouter>
  );
};
export default App;
