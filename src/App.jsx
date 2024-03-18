import NavBar from "./components/Layout/NavBar/NavBar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      <div className="main-body">
        <Outlet />
      </div>
    </>
  );
}

export default App;
