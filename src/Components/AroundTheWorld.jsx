import img from "../assets/around.webp";
import imgt from "../assets/about-icon.webp";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// ..
AOS.init();
const AroundTheWorld = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center gap-16 items-center mt-5 md:mt-10 lg:mt-20 ">
      <div className="lg:w-[35%] " data-aos="fade-right" >
        <img src={img} alt="" className="w-full" />
      </div>

      <div className=" lg:w-[45%]" data-aos="fade-left" data-aos-delay="500" >
        {" "}
        <h1 className="font-bold text-5xl  "> Around The World</h1>
        <p className="flex items-center gap-5 font-semibold text-base mt-5">
          <img src={imgt} /> We Have 25+ Years Of Experience For Give You Better{" "}
          <br /> Tour & Travels Package
        </p>
        <p className=" lg:w-[90%] text-gray-600 mt-4">
          Making a good impression on your site is a huge thing to keep in mind,
          but what about on other sites? If you go to other sites and scam
          people out of their money and get banned off forums for bad behavior
          it will come back and smack you right in the face. Think of it like
          this.
        </p>
        <div className=" flex gap-10 mt-4">
          <div>
            <h1 className="font-semibold text-base">Travel Guidelines</h1>
            <p className="text-gray-600 mt-3">
              Prepare to be flexible during your trip as restrictions and
              policies.
            </p>
          </div>

          <div>
            <h1 className="font-semibold text-base">Best Travel Agents</h1>
            <p className="text-gray-600 mt-3">
            We have 30 years experience of organising the worldwide travel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AroundTheWorld;
