import Licencesample from "../../assets/images/052ff265aad5faf623af5bf39cc0e610d17a8ae1.png";
import Good from "../../assets/images/good.svg";
import warning from "../../assets/images/warning.svg";
import Licensesample2 from "../../assets/images/6fe45ed589cd8efebdda471557ad5d41b9a94c27.png"
function DocumentList() {
    return ( 
        <div>
            <div className="grid grid-cols-2 gap-5 ">
                <div className="border-2 border-[#EBB850] rounded-[17px] relative overflow-hidden h-[111px]">
                    <img src={Licencesample} alt='licence' className="absolute top-0 left-0 object-contain" />
                    <div className="relative bg-[#05243F]/61 h-full w-full z-10 p-4 flex flex-col justify-between">
                        <div className="w-[25px]">
                            <img src={Good} alt="" className="object-contain"/>
                        </div>
                        <p className="text-white text-[16px]">Vehicle Licence</p>
                    </div>
                </div>
                <div className="border-2 border-[#EBB850] rounded-[17px] relative overflow-hidden h-[111px] flex items-center">
                    <img src={Licensesample2} alt='licence' className="absolute top-0 left-0 object-contain" />
                    <div className="relative bg-[#05243F]/61 h-full w-full z-10 p-4 flex flex-col justify-between">
                        <div className="w-[25px]">
                            <img src={warning} alt="" className="object-none"/>
                        </div>
                        <p className="text-white text-[16px]">Road Worthiness</p>
                    </div>
                </div>
                <div className="border-2 border-[#EBB850] rounded-[17px] relative overflow-hidden h-[111px]">
                    <img src={Licencesample} alt='licence' className="absolute top-0 left-0 object-contain" />
                    <div className="relative bg-[#05243F]/61 h-full w-full z-10 p-4 flex flex-col justify-between">
                        <div className="w-[25px]">
                            <img src={Good} alt="" className="object-contain"/>
                        </div>
                        <p className="text-white text-[16px]">Vehicle Licence</p>
                    </div>
                </div>
                                <div className="border-2 border-[#EBB850] rounded-[17px] relative overflow-hidden h-[111px] flex items-center">
                    <img src={Licensesample2} alt='licence' className="absolute top-0 left-0 object-contain" />
                    <div className="relative bg-[#05243F]/61 h-full w-full z-10 p-4 flex flex-col justify-between">
                        <div className="w-[25px]">
                            <img src={warning} alt="" className="object-none"/>
                        </div>
                        <p className="text-white text-[16px]">Road Worthiness</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default DocumentList;