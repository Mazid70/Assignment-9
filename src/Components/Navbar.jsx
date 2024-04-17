import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Drawer, Sidebar, TextInput } from "flowbite-react";
import { useState } from "react";
import {
  
  HiLogin,
  HiPencil,
  HiSearch,
 
} from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const { user } = useContext(AuthContext);
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
          to="/signup"
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
              color: isActive ? "#FCB100" : "#fff",
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
    <nav className=" bg-[#00374D] fixed top-0 w-full z-50">
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
          <div
            className="h-14 w-14 cursor-pointer "
            onClick={() => setIsOpen(true)}
          >
            <img
              className="h-full w-full rounded-full"
              src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* drawer  */}
      <Drawer open={isOpen} onClose={handleClose} position="right" >
        <Drawer.Header title="User Profile" titleIcon={() => <></>} />
        <Drawer.Items >
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <form className="pb-3 md:hidden">
                  <TextInput
                    icon={HiSearch}
                    type="search"
                    placeholder="Search"
                    required
                    size={32}
                  />
                </form>
                <Sidebar.Items>
                  <Sidebar.ItemGroup className="flex flex-col items-center">
                    <div
                      className="h-14 w-14 cursor-pointer "
                      onClick={() => setIsOpen(true)}
                    >
                      <img
                        className="h-full w-full rounded-full"
                        src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
                        alt=""
                      />
                    </div>
                    <h1 className="font-semibold">Name</h1>
                    <h1 className="font-medium">Email</h1>
                    <div className="self-start">
                    <Sidebar.Item href="/authentication/sign-in" icon={HiLogin}>
                      Sign Out
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up" icon={HiPencil}>
                      Update Profile
                    </Sidebar.Item>
                    </div>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </nav>
  );
};

export default Navbar;
