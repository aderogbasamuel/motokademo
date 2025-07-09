import { useNavigate } from "react-router-dom";
import NavigationTabs from "../components/NavigationTabs";
import PagesLayout from "./components/PageLayout";
import DocumentsNav from "../components/DocumentsNav";
function CarDocuments() {
      function handleRenewLicense(carDetail) {
    navigate("/licenses/renew", { state: { carDetail } });
  }

  function handleGarage() {
    navigate("/garage");
  }

  function handleAddCar() {
    navigate("/add-car");
  }
    return ( 
        <div className="px-4 sm:px-6 lg:px-8">
            <PagesLayout
                title="Car Documents"
                subTitle="This is where you find all your vehicle papers e.g Vehicle License, Road worthiness and so on. "
                // mainContentTitle="Car Documents Overview"
            >
              <div>
                <div>
                  <DocumentsNav/>
                </div>
                <div>

                </div>
              </div>
            </PagesLayout>
        </div>
     );
}

export default CarDocuments;