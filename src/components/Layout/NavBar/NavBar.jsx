import NavBarIcon from "../NavBarIcon/NavBarIcon";
import { slide as Menu } from "react-burger-menu";

// Icon imports
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { useState } from "react";

function NavBar() {
  const [toggled, setToggled] = useState(false);
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
              route="/"
              icon={<FaHome />}
              title="Inicio"
              alert={false}
            />
            <NavBarIcon
              route="/cart"
              icon={<FaShoppingCart />}
              title="Cart"
              alert={true}
            />
            <NavBarIcon
              route="/favorites"
              icon={<FaHeart />}
              title="Favourites"
              alert={false}
            />
            <NavBarIcon
              route="/account"
              icon={<RiAccountCircleFill />}
              title="Account"
              alert={false}
            />
            <NavBarIcon
              route="/support"
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
