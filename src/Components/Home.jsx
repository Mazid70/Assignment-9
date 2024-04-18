import {  useState } from "react";
import AroundTheWorld from "./AroundTheWorld";
import Banner from "./Banner";
import { useEffect } from "react";
import EstateSection from "./EstateSection";
import GrandTrip from "./GrandTrip";
import Discount from "./Discount";

import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";


const Home = () => {
  
  const [hospitality, setHospitality] = useState([]);
  useEffect(() => {
    fetch("./hospitality.json")
      .then((res) => res.json())
      .then((data) => setHospitality(data));
  }, []);
  console.log(hospitality);
  return (
    <main >
      <Helmet>
      <title>Home</title>
      </Helmet>
      
      <Banner ></Banner>
      <div className=" container mx-auto">
      <AroundTheWorld></AroundTheWorld>
      <Discount></Discount>
      <h1 className="font-bold text-5xl  text-center my-10"> Explore The New Destinations</h1>
      <section className="grid grid-cols-3 gap-10">
      
        {hospitality.map((hospital) => (
          <EstateSection key={hospital.id} hospital={hospital} ></EstateSection>
        ))}
      </section>
      <GrandTrip></GrandTrip>
      </div>
     
    </main>
  );
};

export default Home;
