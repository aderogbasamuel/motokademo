import { useNavigate } from "react-router-dom";
import NavigationTabs from "../components/NavigationTabs";
import PagesLayout from "./components/PageLayout";
import DocumentsNav from "../components/DocumentsNav";
import DocumentPage from "./components/DocumentPage";
import DocumentList from "./components/DocumentList";
import DocPreview from "./components/Docpreview";
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
              <div className="flex">
                <div className="flex-1 px-4 sm:px-8 bg-[#1E588B]/1 pt-6 pb-10">
                  <DocumentsNav/>
                  <DocumentPage />
                  <DocumentList/>
                </div>
                <div className="flex-1 px-4 sm:px-8 bg-[#F9FAFC] pt-6 pb-10">
                  <DocPreview/>
                </div>
              </div>
            </PagesLayout>
        </div>
     );
}

export default CarDocuments;