function NavBarIcon(props) {
  return (
    <>
      <a className="navbar-btn" href={props?.route}>
        {props?.icon}
        {props?.alert && <span className="alert"></span>}
        <span className="mobile-navbar-icon-title">{props?.title}</span>
      </a>
    </>
  );
}

export default NavBarIcon;
