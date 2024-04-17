import { NavLink } from "react-router-dom";

const Navbar = () => {
    const Link = (
        <>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "bold",
                  color: isActive ? "#FCB100" : "#fff",
                  background: isActive ? "transparent" : "",
                  border: isActive ? "1px solid #FCB100" : "",
                };
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "bold",
                  color: isActive ? "#FCB100" : "#fff",
                  background: isActive ? "transparent" : "",
                  border: isActive ? "1px solid #FCB100" : "",
                };
              }}
            >
             Our Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "bold",
                  color: isActive ? "#FCB100" : "#fff",
                  background: isActive ? "transparent" : "",
                  border: isActive ? "1px solid #FCB100" : "",
                };
              }}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/read"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "bold",
                  color: isActive ? "#FCB100" : "#fff",
                  background: isActive ? "transparent" : "",
                  border: isActive ? "1px solid #FCB100" : "",
                };
              }}
            >
             Sign Up
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to="/signin"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "bold",
                  color: isActive ? "#fff" : "#fff",
                  background: isActive ? "transparent" : "",
                  border: isActive ? "1px solid #FCB100" : "",
                };
              }}
            >
            Sign In
            </NavLink>
          </li>
        </>
      );
    
    return (
       <nav className=" bg-[#00374D]">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu text-lg menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Link}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl sm:text-base lg:text-3xl font-bold text-white">
          Serenity <span className="text-[#FCB100]">Getaways</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg ">{Link}</ul>
        </div>
        <div className="navbar-end space-x-4">
         <div>
          <img src="" alt="" />
         </div>
        </div>
      </div>
    </nav>
    );
};

export default Navbar;