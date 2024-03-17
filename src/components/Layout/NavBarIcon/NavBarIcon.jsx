function NavBarIcon(props) {
  return (
    <>
      <a className="navbar-btn" href={props.route}>
        {props.icon}
        {props.alert && <span className="alert"></span>}
      </a>
    </>
  );
}

export default NavBarIcon;
