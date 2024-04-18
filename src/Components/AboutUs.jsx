import { Helmet } from "react-helmet";

const AboutUs = () => {

    return (
      <div className="container flex items-center justify-center bg-gray-100 mx-auto mt-20">
        <Helmet><title>About Us</title></Helmet>
        <div className="container px-8 py-12 shadow-md rounded-lg">
          <h2 className="text-3xl font-bold mb-4">About Our Serenity Getaways</h2>
          <p className="text-gray-700 mb-8">
            Welcome to our Serenity Getaways, where hospitality meets comfort and
            convenience! At our Hub, we are dedicated to providing a seamless
            platform for travelers to discover, book, and enjoy their perfect
            accommodation experiences.
          </p>
          <div className="mt-4 text-gray-700">
            <p>
              Our team at the Serenity Getaways consists of passionate individuals
              with extensive experience in the hospitality industry. We share a
              common mission: to connect travelers with exceptional stays and
              unforgettable experiences.
            </p>
            <p className="mt-2">
              Whether you are seeking a cozy bed and breakfast, a luxurious resort
              getaway, or a charming vacation rental, the Serenity Getaways has
              something for every traveler. Our curated selection includes a wide
              range of accommodations, from boutique hotels to spacious lodges.
            </p>
            <p className="mt-2">
              Join our community of travelers and hosts as we embark on memorable
              journeys together. Explore new destinations, share travel tips, and
              create lasting memories with the Serenity Getaways.
            </p>
            <div className="mt-8 border-t pt-6 border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-700 mb-2">Email: contact@hospitalityhub.com</p>
              <p className="text-gray-700 mb-2">Phone: +1 (123) 456-7890</p>
              <p className="text-gray-700 mb-2">
                Address: 123 Hospitality Street, Cityville, State, Country
              </p>
              <p className="text-gray-700 mb-2">
                Business Hours: Monday - Friday, 9:00 AM - 5:00 PM
              </p>
            </div>
            <div className="mt-8 border-t pt-6 border-gray-200">
              <h3 className="text-xl font-semibold mb-4">More Information</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Explore a diverse range of accommodations for every travel style.</li>
                <li>Connect with hosts and fellow travelers through our community platform.</li>
                <li>Read and write reviews to share your travel experiences.</li>
                <li>Discover personalized recommendations tailored to your preferences.</li>
                <li>Experience hassle-free booking and seamless communication.</li>
                <li>
                  Access exclusive deals and discounts with our membership program.
                </li>
              </ul>
            </div>
            <div className="mt-8 border-t pt-6 border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Featured Destinations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 p-4 rounded-md">
                  <h4 className="text-lg font-semibold mb-2">
                    Destination of the Month
                  </h4>
                  <p className="text-gray-700">
                    Discover our top pick for this month is must-visit destination.
                  </p>
                  <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                    Explore Now
                  </button>
                </div>
                <div className="border border-gray-200 p-4 rounded-md">
                  <h4 className="text-lg font-semibold mb-2">Host Spotlight</h4>
                  <p className="text-gray-700">
                    Learn more about the exceptional hosts behind our featured accommodations.
                  </p>
                  <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                    Meet Our Hosts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  