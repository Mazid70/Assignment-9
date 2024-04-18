import imgd1 from "../assets/d1.png";
import imgd2 from "../assets/d2.png";
const Discount = () => {
  return (
    <div className="flex gap-10 mt-10">
      <div data-aos="fade-right" data-aos-delay="1000">
        <img src={imgd1} alt="" />
      </div>
      <div data-aos="fade-left" data-aos-delay="1500">
        <img src={imgd2} alt="" />
      </div>
    </div>
  );
};

export default Discount;
