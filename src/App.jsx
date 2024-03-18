import { useEffect } from "react";
import NavBar from "./components/Layout/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fillItems } from "./lib/state/productSlice";
function App() {
  const dispatch = useDispatch();

  const handleFill = (items) => {
    dispatch(fillItems(items));
  };
  const localProducts = JSON.parse(localStorage.getItem("frontend_test_cart"));
  useEffect(() => {
    if (localProducts && localProducts?.length > 0) {
      handleFill(localProducts);
    }
  }, [localProducts]);
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
