import one from "../assets/one.jpeg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";


import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative ">
          {" "}
          <img src={one} alt="" className="opacity-45" />
          <div className="absolute text-white text-center space-y-4">
            <h1 className="font-extrabold text-5xl text-white">
              Indulge in Unmatched Luxury <br /> and Comfort
            </h1>
            <p className="text-center">
              Experience the pinnacle of relaxation and sophistication at Serene
              Haven Resort. <br />
              Treat yourself to unparalleled comfort and personalized service in
              our luxurious accommodations
            </p>
            <a
              href="#_"
              className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium tracking-tighter text-white bg-[#FCB100] rounded-lg group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative">Explore</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={two} alt="" className="opacity-45" />
          <div className="absolute text-white text-center space-y-4">
            <h1 className="font-extrabold text-5xl text-white">
              Escape to Paradise at Serene <br />
              Haven Resort
            </h1>
            <p className="text-center">
              Immerse yourself in tranquility and luxury at Serene Haven Resort.
              <br />
              Discover the ultimate getaway destination where every moment is a
              breath of fresh air.
            </p>
            <a
              href="#_"
              className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium tracking-tighter text-white bg-[#FCB100] rounded-lg group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative">Explore</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={three} alt="" className="opacity-45" />
          <div className="absolute text-white text-center space-y-4">
            <h1 className="font-extrabold text-5xl text-white">
              Create Memories That Last <br /> a Lifetime
            </h1>
            <p className="text-center">
              Make every moment unforgettable at Serene Haven Resort. From
              exhilarating adventures <br /> to serene moments of relaxation,
              create cherished memories with us that you will treasure forever
            </p>
            <a
              href="#_"
              className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium tracking-tighter text-white bg-[#FCB100] rounded-lg group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative">Explore</span>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
