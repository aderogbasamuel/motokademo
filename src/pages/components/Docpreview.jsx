import Licensesample2 from "../../assets/images/6fe45ed589cd8efebdda471557ad5d41b9a94c27.png"
function DocPreview() {
    return ( 
        <div className="flex justify-between">
            <div>
                <p className="py-2 text-sm font-semibold">Vehicle License</p>
                <p className="py-2 text-red-600 text-sm font-light">Expires on May 2 2025</p>
            </div>
            <img src={Licensesample2} alt=""className="" />
        </div>
     );
}

export default DocPreview;