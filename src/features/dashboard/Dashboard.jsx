import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import WelcomeSection from "../../components/WelcomeSection";
import NavigationTabs from "../../components/NavigationTabs";
import CarDetailsCard from "../../components/CarDetailsCard";
import AddCarCard from "../../components/AddCarCard";
import QuickActions from "./components/QuickActions";
// import { useGetCars } from "../car/useCar";
import userData from "../../data/data.jsx";
import { FaCarAlt, FaPlus } from "react-icons/fa";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function Dashboard() {
  // const { cars, isLoading } = userData;
  const isLoading = false; // Replace with actual loading state from your data fetching logic
  const cars = userData[0]; // Replace with actual data fetching logic
  // const navigate = useNavigate();

  function handleRenewLicense(carDetail) {
    navigate("/licenses/renew", { state: { carDetail } });
  }

  function handleGarage() {
    navigate("/garage");
  }

  function handleAddCar() {
    navigate("/add-car");
  }

  // const userName = localStorage.getItem("userInfo")
  //   ? JSON.parse(localStorage.getItem("userInfo")).name
  //   : "";

  const sortedCars = React.useMemo(() => {
    if (!Array.isArray(cars?.cars)) return [];
    return [...cars.cars].sort((a, b) => {
      const dateA = new Date(a.expiryDate);
      const dateB = new Date(b.expiryDate);
      return dateA - dateB;
    });
  }, [cars?.cars]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <WelcomeSection userName={'Samuell'} />
      <NavigationTabs onGarageClick={handleGarage} activeTab="license" />

      <div className="mb-8">
        {/* {isLoading ? (
          <div className="flex h-64 items-center justify-center ">
            <LoadingSpinner />
          </div>
        ) : Array.isArray(cars?.cars) && cars.cars.length > 0 ? ( */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
            <div>
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                // className="!pb-12 h-full"
              >
                 {userData.map((car, index) => (
                  <SwiperSlide key={car.id || index} >
                    <div >
                      <CarDetailsCard
                        carDetail={userData[0].carDetails[index]}
                        isRenew={true}
                        onRenewClick={handleRenewLicense}
                      />
                    </div>
                  </SwiperSlide>
                ))} 
              </Swiper>
            </div>
            <div>
              <AddCarCard onAddCarClick={handleAddCar} />
            </div>
          </div>
         {/* ) : (  */}
          {/* <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex h-64 items-center justify-center rounded-2xl bg-white p-8 text-center text-gray-500">
              <div>
                <FaCarAlt className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                <p className="text-lg font-medium">No cars found</p>
                <p className="mt-1 text-sm">Add your first car to get started</p>
              </div>
            </div>
            <div >
              <AddCarCard onAddCarClick={handleAddCar} />
            </div>
          </div> */}
         {/* )}  */}
      </div>

      <QuickActions />
    </div>
  );
}

// import React, { useState } from "react";
// import axios from "axios";

// const Dashboard = () => {
//   const [carQuery, setCarQuery] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const fetchCarImage = async () => {
//     setLoading(true);
//     setError("");
//     setImageUrl("");

//     try {
//       const response = await axios.get(
//         `https://www.carimagery.com/api.asmx/GetImageUrl`,
//         {
//           params: { searchTerm: carQuery },
//         }
//       );

//       const parser = new DOMParser();
//       const xmlDoc = parser.parseFromString(response.data, "text/xml");
//       const url = xmlDoc.getElementsByTagName("string")[0].textContent;

//       setImageUrl(url);
//     } catch (err) {
//       console.error(err);
//       setError("Could not fetch image");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow">
//       <h2 className="text-xl font-bold mb-4">Car Image Finder</h2>
//       <input
//         type="text"
//         placeholder="e.g. Toyota Corolla"
//         value={carQuery}
//         onChange={(e) => setCarQuery(e.target.value)}
//         className="w-full p-2 border rounded mb-2"
//       />
//       <button
//         onClick={fetchCarImage}
//         disabled={loading || !carQuery}
//         className="w-full bg-blue-600 text-white p-2 rounded"
//       >
//         {loading ? "Searching..." : "Get Image"}
//       </button>

//       {error && <p className="text-red-500 mt-2">{error}</p>}

//       {imageUrl && (
//         <div className="mt-4">
//           <img
//             src={imageUrl}
//             alt={carQuery}
//             className="w-full h-auto object-contain rounded"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;
