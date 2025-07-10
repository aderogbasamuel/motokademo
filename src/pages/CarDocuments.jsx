import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationTabs from "../components/NavigationTabs";
import PagesLayout from "./components/PageLayout";
import DocumentsNav from "../components/DocumentsNav";
import DocumentPage from "./components/DocumentPage";
import DocumentList from "./components/DocumentList";
import DocPreview from "./components/Docpreview";
import userData from "../data/data";
function CarDocuments() {
  const [selectedDocument, setSelectedDocument] = useState("VehicleLicense",);
    // const [filteredDocument, setFilteredDocument] = useState(
    //   userData.CarDocuments,
    // );
    return ( 
        <div className="px-4 sm:px-6 lg:px-8">
            <PagesLayout
                title="Car Documents"
                subTitle="This is where you find all your vehicle papers e.g Vehicle License, Road worthiness and so on. "
                // mainContentTitle="Car Documents Overview"
            >
              <div className="flex">
                <div className="flex-1 px-4 sm:px-8  pt-6 pb-10 bg-[linear-gradient(90deg,_rgba(255,255,255,0)_25.17%,_rgba(115,115,115,0.1)_128.52%)]">
                  <DocumentsNav/>
                  <DocumentPage 
                  selectedDocument={selectedDocument}
                  setSelectedDocument={setSelectedDocument}
                  />
                  
                </div>
                <div className="flex-1 px-4 sm:px-6 bg-[#F9FAFC] pt-6 pb-6">
                  <DocPreview 
                  selectedDocument={selectedDocument}
                  />
                </div>
              </div>
            </PagesLayout>
        </div>
     );
}

export default CarDocuments;