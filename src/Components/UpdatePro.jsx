import {  useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaUser,  FaPhoneAlt } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UpdatePro = () => {
  const { setUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const onform = "/";
  const updateProfile = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const phone = form.get("phone");
    const image = form.get("image");
    setUpdateProfile(name, image, phone)
    toast.success("Update Successfully");
    setTimeout(() => {
      navigate(onform);
    }, 2000);
  };

  return (
    <section className=" -mb-10 flex items-center justify-center h-[100vh] bg-[url(assets/three.jpg)] bg-no-repeat bg-cover">
      <Helmet><title>Update Profile</title></Helmet>
      <ToastContainer></ToastContainer>
      <div className="backdrop-blur lg:backdrop-blur-xl w-[420px] px-[30px] py-[40px] shadow-xl border rounded-xl text-white ">
        <form onSubmit={updateProfile} className="space-y-5">
          <h1 className="text-4xl font-bold text-center">Update Profile</h1>
          <div className="flex items-center  border w-full h-12 rounded-full relative">
            <FaUser className="absolute left-3" />
            <input
              className="w-full h-full bg-transparent rounded-full pl-10 placeholder:text-white "
              type="text"
              placeholder="Enter your updated Name"
              name="name"
              required
            />
          </div>
          <div className="flex items-center  border w-full h-12 rounded-full relative">
            <MdEmail className="absolute left-3" />
            <input
              className="w-full h-full bg-transparent rounded-full pl-10 placeholder:text-white "
              type="link"
              placeholder="Enter your updated Image URL"
              name="image"
              required
            />
          </div>
          <div className="flex items-center  border w-full h-12 rounded-full relative">
            <FaPhoneAlt className="absolute left-3" />
            <input
              className="w-full h-full bg-transparent rounded-full pl-10 placeholder:text-white "
              type="number"
              placeholder="Enter your updated Phone"
              name="phone"
              required
            />
          </div>

          <div>
            <input
              className="w-full h-12 bg-white rounded-full text-[#6c6c6f] font-bold text-lg"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdatePro;
