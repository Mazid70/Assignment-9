
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from 'react-router-dom';
// ..
AOS.init();

const EstateSection = ({hospital}) => {
    const { id,
    segment_name,
    property_name,
    description,
    rating,
    location,
    facilities,
    image,
    additional_info, 
      rooms,
      suites,
      conference_rooms}=hospital
    return (
      <div data-aos="fade-up" data-aos-delay="300">
    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl flex justify-center">
      <div>
        <div className="relative flex items-end overflow-hidden rounded-xl">
          <img src={image} alt="Hotel Photo" className="w-[370px] h-[245px] rounded-xl" />
          <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-slate-400 ml-1 text-sm">{rating}</span>
          </div>
        </div>

        <div className="mt-1 p-2">
          <h2 className="text-slate-700">{property_name}</h2>
          <p className="text-slate-400 mt-1 text-sm">{location}</p>

          <div className="mt-3 flex items-end justify-between">
            <p>
              <span className="text-lg font-bold text-blue-500">{additional_info.rooms}</span>
              <span className="text-slate-400 text-sm">Rooms</span>
            </p>

            <div className="group inline-flex rounded-xl ">
            
            <Link to={`/estate/${id}`}><a
        
        className="relative inline-flex items-center justify-center px-5 py-3 overflow-hidden font-medium tracking-tighter text-white bg-sky-300 rounded-lg group"
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
       <span className="relative">SeeDetails</span>
      </a></Link>
            </div>
          </div>
        </div>
      </div>
    </article>

      </div>
    );
};

export default EstateSection;