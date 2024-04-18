import imgone from "../assets/logo1.webp";
import imgtwo from "../assets/logo2.png";
import imgthree from "../assets/logo3.png";

import CountUp from "react-countup";
const GrandTrip = () => {
  return (
    <section className="flex flex-col lg:flex-row mt-14">
      <div
        className="bg-[url(assets/grand.webp)] lg:px-1/2  lg:py-60 bg-cover bg-no-repeat flex-1 "
        data-aos="fade-right"
        data-aos-delay="1400"
      ></div>
      <div className="p-5 bg-[#00374D] text-white flex-1 flex flex-col justify-center text-start pl-10 gap-4"data-aos="fade-left" data-aos-delay="1600">
        <h1 className="text-[#FCA532] font-semibold text-xl satisfy">
          Enjoy a Grand Trip{" "}
        </h1>
        <h1 className="font-bold text-5xl  "> International </h1>
        <h1 className="font-bold text-5xl  "> Destinations</h1>
        <p className="w-[60%]">
          Explore the worlds wonders, each city a vibrant story waiting to
          unfold. From ancient marvels to modern delights, embark on journeys
          that enrich the soul.
        </p>
        <h1 className="font-bold">
          <u className="text-yellow-500">
            <span className="text-white">Read</span>
          </u>{" "}
          More
        </h1>
        <div className="flex flex-col lg:flex-row text-black gap-5">
          <div className="bg-white flex flex-col items-center justify-center rounded-xl px-7  py-5 space-y-2">
            <img src={imgone} alt="" />
            <h1 className=" font-bold text-3xl">
              <CountUp end={6589} duration="5" />+
            </h1>
            <p className="font-semibold">Satisfied Clients</p>
          </div>
          <div className="bg-white flex flex-col items-center justify-center rounded-xl px-7  py-5 space-y-2">
            <img src={imgtwo} alt="" />
            <h1 className=" font-bold text-3xl">
              <CountUp end={6589} duration="5" />+
            </h1>
            <p className="font-semibold">Satisfied Clients</p>
          </div>
          <div className="bg-white flex flex-col items-center justify-center rounded-xl px-7  py-5 space-y-2">
            <img src={imgthree} alt="" />
            <h1 className=" font-bold text-3xl">
              <CountUp end={6589} duration="5" />+
            </h1>
            <p className="font-semibold">Satisfied Clients</p>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default GrandTrip;
