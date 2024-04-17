import { useState } from "react";
import AroundTheWorld from "./AroundTheWorld";
import Banner from "./Banner";
import { useEffect } from "react";
// import EstateSection from "./EstateSection";
// import GrandTrip from "./GrandTrip";

const Home = () => {
  const [hospitality, setHospitality] = useState([]);
  useEffect(() => {
    fetch("./hospitality.json")
      .then((res) => res.json())
      .then((data) => setHospitality(data));
  }, []);
  console.log(hospitality);
  return (
    <main className=" container mx-auto">
      <Banner></Banner>
      <AroundTheWorld></AroundTheWorld>
      <h1 className="font-bold text-5xl  text-center my-10"> Estate</h1>
      <section className="grid grid-cols-3 gap-10">
      
        {/* {hospitality.map((hospital) => (
          <EstateSection key={hospital.id} hospital={hospital}></EstateSection>
        ))} */}
      </section>
      {/* <GrandTrip></GrandTrip> */}
    </main>
  );
};

export default Home;
