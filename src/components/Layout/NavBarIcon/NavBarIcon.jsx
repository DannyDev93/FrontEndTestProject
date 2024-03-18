import { Link } from "react-router-dom";
function NavBarIcon(props) {
  return (
    <>
      <Link className="navbar-btn" to={props?.route}>
        {props?.icon}
        {props?.alert && <span className="alert"></span>}
      </Link>
    </>
  );
}

export default NavBarIcon;
