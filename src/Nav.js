import { NavLink } from "react-router-dom";

export function Nav() {
  const navlinkstyle=({active}) => {
   return {color: active ? 'black' : ''}
  }
  return (
    <div className="sidnavdiv">
      <nav>
        <ul className="nav flex-column navlist">
          <li className="nav-item">
            <span className="admin"><span><i class="fa fa-smile-o icon" ></i></span>SB Admin</span>
          </li>
          <hr />
          <li className="nav-item">
          <NavLink to="/" style={navlinkstyle.color}><span><i class="fa fa-tachometer icon" ></i></span>Dashboard</NavLink></li>
          <hr />
          <div className="sidebar-heading">Interface</div>
          <li className="nav-item">
            <NavLink to="/components"><span><i class="fa fa-cog icon"></i></span>Components</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/utilities"><span><i class="fa fa-wrench icon"></i></span>Utilities</NavLink>
          </li>
          <hr />
          <div className="sidebar-heading">Addons</div>
          <li className="nav-item">
            <NavLink to="/charts"><span><i class="fa fa-area-chart icon"></i></span>Charts</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/tables"><span><i class="fa fa-table icon"></i></span>tables</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
