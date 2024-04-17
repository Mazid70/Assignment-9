import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";

const SignIn = () => {
  const [visible, setVisible] = useState(false);
  const passwordToggle = () => {
    setVisible(!visible);
  };

  return (
    <section className=" -mt-[78px] flex items-center justify-center h-[100vh] bg-[url(assets/img.jpg)] bg-no-repeat bg-cover">
      <div className="backdrop-blur-xl w-[420px] px-[30px] py-[40px] shadow-xl border rounded-xl text-white ">
        <form action="" className="space-y-5">
          <h1 className="text-4xl font-bold text-center">Sign In</h1>
          <div className="flex items-center  border w-full h-12 rounded-full relative">
            <MdEmail className="absolute left-3" />
            <input
              className="w-full h-full bg-transparent rounded-full pl-10 placeholder:text-white "
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="flex items-center  border w-full h-12 rounded-full relative">
            <FaLock className="absolute left-3" />
            <input
              className="w-full h-full bg-transparent rounded-full pl-10 placeholder:text-white "
              type={visible ? "text" : "password"}
              placeholder="Password"
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
            <Link className="font-semibold" to="/signup">Register</Link>
          </h3>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
