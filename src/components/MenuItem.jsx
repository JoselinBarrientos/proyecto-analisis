import { NavLink } from "react-router-dom";

function MenuItem(props) {
  return (
    <li className="nav-item">
      <NavLink
        end
        to={props.data?.url}
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link text-white"
        }
      >
        <i
          className={`bi bi-${props.data?.icon}`}
          style={{
            marginRight: "10px",
          }}
        ></i>
        {props.data?.name}
      </NavLink>
    </li>
  );
}

export default MenuItem;
