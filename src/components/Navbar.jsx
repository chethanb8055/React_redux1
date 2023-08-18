// import img from "."
import { BiSolidCartAlt } from "react-icons/bi";
import img from "./starbucks-logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between ">
        <NavLink to="/">
          <img src={img} alt="" className="w-10" />
        </NavLink>
        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div>
              <BiSolidCartAlt />
            </div>
          </NavLink>
          {/* <Link to="/">Home</Link>   */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
