import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock , FaUser,FaFacebook,FaPhoneAlt} from "react-icons/fa";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [visible, setVisible] = useState(false);
  const passwordToggle = () => {
    setVisible(!visible);
  };

  return (
    <section className=" -mt-[78px] flex items-center justify-center h-[100vh] bg-[url(assets/img.jpg)] bg-no-repeat bg-cover">
      <div className="backdrop-blur-xl w-[420px] px-[30px] py-[40px] shadow-xl border rounded-xl text-white ">
        <form action="" className="space-y-5">
          <h1 className="text-4xl font-bold text-center">Sign Up</h1>
          <div className="flex items-center  border w-full h-12 rounded-full relative">
            <FaUser className="absolute left-3" />
            <input
              className="w-full h-full bg-transparent rounded-full pl-10 placeholder:text-white "
              type="text"
              placeholder="Enter your Name"
            />
          </div>
          <div className="flex items-center  border w-full h-12 rounded-full relative">
            <MdEmail className="absolute left-3" />
            <input
              className="w-full h-full bg-transparent rounded-full pl-10 placeholder:text-white "
              type="email"
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex items-center  border w-full h-12 rounded-full relative">
            <FaPhoneAlt className="absolute left-3" />
            <input
              className="w-full h-full bg-transparent rounded-full pl-10 placeholder:text-white "
              type="number"
              placeholder="Enter your Phone"
            />
          </div>
          <div className="flex items-center  border w-full h-12 rounded-full relative">
            <FaLock className="absolute left-3" />
            <input
              className="w-full h-full bg-transparent rounded-full pl-10 placeholder:text-white "
              type={visible ? "text" : "password"}
              placeholder="Create a Password"
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

          <div>
            <input
              className="w-full h-12 bg-white rounded-full text-[#6c6c6f] font-bold text-lg"
              type="submit"
              value="Sign Up"
            />
          </div>
          <div className="flex items-center gap-2">
            {" "}
            <div className="h-[1px] bg-white w-full"></div>
            <p>Or</p>
            <div className="h-[1px] bg-white w-full"></div>
          </div>
        </form>
        <div className=" mt-5 flex text-base font-bold items-center bg-white h-12 text-[#6c6c6f] rounded-full">
          {" "}
          <FcGoogle className="text-2xl ml-6 mr-16" /> Sign up with Google{" "}
        </div>
        <div className="mt-5 flex text-base font-bold items-center bg-white h-12 text-[#6c6c6f] rounded-full">
          {" "}
          <FaFacebook className=" text-blue-600 text-2xl ml-6 mr-16" /> Sign up with Facebook{" "}
        </div>
        <h3 className="mt-5 text-center">
            Already have an account?{" "}
            <Link className="font-semibold" to="/signin">Sign In</Link>
          </h3>
      </div>
    </section>
  );
};

export default SignUp