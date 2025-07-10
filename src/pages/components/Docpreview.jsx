import Licencesample from "../../assets/images/052ff265aad5faf623af5bf39cc0e610d17a8ae1.png";
import good from "../../assets/images/good.svg";
import warning from "../../assets/images/warning.svg";
import Licensesample2 from "../../assets/images/6fe45ed589cd8efebdda471557ad5d41b9a94c27.png"
import { useState } from "react";
const categories=[
        {
            key: "VehicleLicense",
            title: "Vehicle License",
            image: Licencesample,
            status: good,
        },
        {
            key: "RoadWorthiness",
            title: "Road Worthiness",
            image: Licensesample2,
            status: warning
        },
        {
            key: "VehicleLicense2",
            title: "Vehicle License",
            image: Licencesample,
            status: good
        },
        {
            key: "RoadWorthiness2",
            title: "Road Worthiness",
            image: Licensesample2,
            status: warning
        }
    ]
function DocPreview({selectedDocument}) {
const [aspect, setAspect] = useState("portrait");
        const imageSrc= categories.find(doc => doc.key === selectedDocument)?.image || Licensesample2;
             const handleLoad = (e) => {
    const { naturalWidth: w, naturalHeight: h } = e.target;
    setAspect(w > h ? "landscape" : "portrait");
  };
    return ( 
        <div className="flex flex-col items-center h-full">
            <div className="flex justify-between w-full h-fit">
                <p className="py-2 text-sm font-semibold">Vehicle License</p>
                <p className="py-2 text-red-600 text-sm font-light">Expires on May 2 2025</p>
            </div>
            <div className="w-full  px-16 py-4 flex flex-1 h-64 items-center">
            <img src={imageSrc} alt=""
            onLoad={handleLoad}

             className={` shadow-2xl rounded-[7px] ${
          aspect === "landscape" ? "rotate-90 scale-150" : ""
        }`}
        style={{
          transition: "transform 0.3s ease",
          transformOrigin: "center center",
        }}
            />
            </div>
            <div className="flex justify-between w-full max-h-full px-2 pt-4 pb-0 h-fit">
                <button className="rounded-full px-6 py-3 bg-[#697B8C4A] text-sm text-[#697C8C]">Share</button>
                <button className="rounded-full px-6 py-3 bg-[#2284DB] text-sm text-[#ffffff]">Download License</button>
            </div>
        </div>
     );
}

export default DocPreview;