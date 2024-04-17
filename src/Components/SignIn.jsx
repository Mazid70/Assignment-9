import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SignIn = () => {
  const{signIn}=useContext(AuthContext)
  const [visible, setVisible] = useState(false);
  const location=useLocation();
  const navigate=useNavigate()
  const passwordToggle = () => {
    setVisible(!visible);
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state?location.state:"/")
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <section className="-mb-10 flex items-center justify-center h-[100vh] bg-[url(assets/three.jpg)] bg-no-repeat bg-cover">
      <div className="backdrop-blur-xl w-[420px] px-[30px] py-[40px] shadow-xl border rounded-xl text-white ">
        <form onSubmit={handleSignIn} className="space-y-5">
          <h1 className="text-4xl font-bold text-center">Sign In</h1>
          <div className="flex items-center  border w-full h-12 rounded-full relative">
            <MdEmail className="absolute left-3" />
            <input
              className="w-full h-full bg-transparent rounded-full pl-10 placeholder:text-white "
              type="text"
              placeholder="Email"
              required
              name="email"
            />
          </div>
          <div className="flex items-center  border w-full h-12 rounded-full relative">
            <FaLock className="absolute left-3" />
            <input
              className="w-full h-full bg-transparent rounded-full pl-10 placeholder:text-white "
              type={visible ? "text" : "password"}
              placeholder="Password"
              required
              name="password"
            />
            {visible ? (
              <BsFillEyeFill
                className="text-xl absolute right-3"
                onClick={passwordToggle}
              ></BsFillEyeFill>
            ) : (
              <BsFillEyeSlashFill
                className="text-xl absolute right-3"
                onClick={passwordToggle}
              ></BsFillEyeSlashFill>
            )}
          </div>

          <div className="flex justify-between">
            {" "}
            <div>
              <input type="checkbox" /> <span> Remember Me</span>{" "}
            </div>
            <span>
              <a href="#">Forget Password?</a>
            </span>
          </div>
          <div>
            <input
              className="w-full h-12 bg-white rounded-full text-black font-bold text-lg"
              type="submit"
              value="SignIn"
            />
          </div>
          <h3 className="text-center">
            Do not have an account?{" "}
            <Link className="font-semibold" to="/signup">
              Register
            </Link>
          </h3>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
