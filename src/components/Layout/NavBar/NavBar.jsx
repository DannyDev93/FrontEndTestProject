import NavBarIcon from "../NavBarIcon/NavBarIcon";

// Icon imports
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <NavBarIcon route="/" icon={<FaHome />} alert={false} />
        <NavBarIcon route="/cart" icon={<FaShoppingCart />} alert={true} />
        <NavBarIcon route="/favorites" icon={<FaHeart />} alert={false} />
        <NavBarIcon
          route="/account"
          icon={<RiAccountCircleFill />}
          alert={false}
        />
        <NavBarIcon
          route="/support"
          icon={<IoChatbubbleEllipsesSharp />}
          alert={false}
        />
      </div>
    </>
  );
}

export default NavBar;
