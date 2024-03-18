import NavBarIcon from "../NavBarIcon/NavBarIcon";
import { useSelector } from "react-redux";

// Icon imports
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [toggled, setToggled] = useState(false);
  const [cartAlert, setCartAlert] = useState(false);
  const array = useSelector((state) => state.array);

  useEffect(() => {
    if (array?.length > 0) {
      setCartAlert(true);
    } else {
      setCartAlert(false);
    }
  }, [array]);
  return (
    <>
      <div className="navbar">
        <div className="navbar-inner">
          <input
            type="checkbox"
            role="button"
            className="menu"
            onClick={() => {
              setToggled(!toggled);
            }}
          />
          <div
            className={
              "navbar-icon-container" + (toggled ? " enabled" : " disabled")
            }
          >
            <NavBarIcon
              route=""
              icon={<FaHome />}
              title="Home"
              alert={false}
            />
            <NavBarIcon
              route={cartAlert ? "cart" : null}
              icon={<FaShoppingCart />}
              title="Cart"
              alert={cartAlert}
            />
            <NavBarIcon
              route="favorites"
              icon={<FaHeart />}
              title="Favorites"
              alert={false}
            />
            <NavBarIcon
              route="account"
              icon={<RiAccountCircleFill />}
              title="Account"
              alert={false}
            />
            <NavBarIcon
              route="support"
              title="Support"
              icon={<IoChatbubbleEllipsesSharp />}
              alert={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
