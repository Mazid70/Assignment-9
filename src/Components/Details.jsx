import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const hospitals = useLoaderData();
    const { id } = useParams();
    const hospital = hospitals.find((hospital) => hospital.id == id);
    const {
        segment_name,
        property_name,
        description,
        rating,
        location,
        facilities,
        image,
        additional_info,
         }=hospital
    return (
        <div style={{ backgroundImage: `url(${image})`}} className="  flex justify-center items-center h-[100vh] bg-no-repeat bg-cover -mb-10">
           <div key={id} className="border shadow-xl flex itr flex-col lg:flex-row lg:gap-12 lg:mt-10 w-4/5 justify-center items-center backdrop-blur-xl text-white ">
     
      <div className=" lg:w-[570px] h-[500px] lg:h-[500px] bg-[#1313130D] flex justify-center items-center rounded-xl">
        <img src={image} alt="" className="w-[70%] h-[70%]" />
      </div>
      <div className="space-y-5 flex-1 p-5">
        <h1 className="text-4xl font-bold my-10">{property_name}</h1>
        <h1 className="font-bold text-xl "> {segment_name}</h1>
        <hr />
        <h1 className="font-bold text-xl ">Location:{location}</h1>
        <hr />
        <h1 className="text-base text-white">
          {" "}
          <span className="font-bold text-[#00374D]">Description : </span>
          {description}
        </h1>
        <div className="">
          <span className="font-bold text-white mr-5">facilities</span>
          {facilities.map((tag, idx) => (
            <button
              className="bg-[#00374D] font-medium text-white mr-5 mt-5 px-3 py-2 rounded-2xl"
              key={idx}
            >
              #{tag}
            </button>
          ))}
        </div>
        <hr />
        <div className="flex gap-5 lg:gap-16">
          <div className="space-y-4">
            <h1 className=" text-base font-normal ">
            Rooms:
            </h1>
            <h1 className=" text-base font-normal ">
            Suites:
            </h1>
            <h1 className=" text-base font-normal ">
            Conference Rooms:
            </h1>
            <h1 className=" text-base font-normal ">
            Rating:
            </h1>
            
          </div>
          <div className="space-y-4">
            <h4 className="font-bold ">{additional_info.rooms} </h4>
            <h4 className="font-bold ">{additional_info.suites} </h4>
            <h4 className="font-bold ">{additional_info.conference_rooms} </h4>
            <h4 className="font-bold ">{rating} </h4>
            
          </div>
        </div>{" "}
        <button
          className=" bg-[#00374D] border-0 px-10 py-3 btn text-white"
        >
          Buy
        </button>
      </div>
    </div> 
        </div>
    );
};

export default Details;