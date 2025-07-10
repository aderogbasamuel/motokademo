import userData from "../../data/data";
import { Icon } from "@iconify/react";
function DocumentPage() {
    const cars = userData[0]?.carDetails[0];
    const imageUrl=`https://www.carlogos.org/car-logos/${cars?.vehicle_make?.toLowerCase()}-logo.png`
    // console.log(cars);
    // console.log(imageUrl);
    return ( 
        <div >
                {/* <li className="flex items-center gap-1 p-4 px-2 bg-[#45A1F2] rounded-[10px] w-fit text-white border h-fit justify-between">
                    <img src={imageUrl} alt={cars?.vehicle_make} className="h-12 w-6 p-0 object-contain border"/>
                    <h3 className="text-[24px] font-semibold">{cars?.plate_number}</h3>
                    <Icon icon="ion:car-sport-sharp" fontSize={100} color="#fffff" className="border-1 border h-fit w-fit"/>
                </li> */}
                <div className="flex items-center justify-between bg-[#45A1F2] rounded-[10px] w-fit gap-10 px-4 py-2.5 pe-6">
                          <div className="flex items-center gap-2">
                            <div className="">
                              <img
                                // src={carLogo}
                                // src="https://www.carlogos.org/car-logos/toyota-logo.png"
                                src={imageUrl}
                                lazyloading="lazy"
                                alt={cars?.vehicle_make || "Car"}
                                className="h-6 w-6 object-contain"
                                // onError={() => setCarLogo(MercedesLogo)}
                              />
                            </div>
                            <h3 className="text-xl font-semibold text-white">
                              {cars?.plate_number || "-"}
                            </h3>
                          </div>
                          <div>
                            <Icon icon="ion:car-sport-sharp" fontSize={30} color="#ffffff" />
                          </div>
                        </div>
                {/* <li className="flex ites-center w-fit">
                    <img src={imageUrl} alt={cars?.vehicle_make} className="h-6 w-6 object-contain border"/>
                    {cars?.plate_number}
                </li> */}
            <div>
            <div className="block w-full flex items-end">
                <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-600 w-full">Documents</label>
                <select name="year" id="" className="h-fit text-gray-600 text-base text-sm rounded-lg block w-fit py-2.5 px-0 focus:outline-none">
                    <option selected value="2025">2025</option>
                    <option  value="2024">2024</option>
                    <option  value="2023">2023</option>
                    <option  value="2022">2022</option>
                </select>
            </div>
            </div>
        </div>
     );
}

export default DocumentPage;