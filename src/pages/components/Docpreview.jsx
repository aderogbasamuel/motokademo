import Licensesample2 from "../../assets/images/6fe45ed589cd8efebdda471557ad5d41b9a94c27.png"
import Licencesample from "../../assets/images/052ff265aad5faf623af5bf39cc0e610d17a8ae1.png";
function DocPreview() {
    return ( 
        <div className="flex justify-between flex-col items-center">
            <div className="flex justify-between w-full">
                <p className="py-2 text-sm font-semibold">Vehicle License</p>
                <p className="py-2 text-red-600 text-sm font-light">Expires on May 2 2025</p>
            </div>
            <div className="w-full  px-16 py-4">
            <img src={Licensesample2} alt=""className="shadow-2xl rounded-[7px]" />
            </div>
            <div className="flex justify-between w-full px-2 pt-4 pb-0">
                <button className="rounded-full px-6 py-3 bg-[#697B8C4A] text-sm text-[#697C8C]">Share</button>
                <button className="rounded-full px-6 py-3 bg-[#2284DB] text-sm text-[#ffffff]">Download License</button>
            </div>
        </div>
     );
}

export default DocPreview;