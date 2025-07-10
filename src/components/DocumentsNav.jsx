function DocumentsNav({
  activeTab = "MyCar",
  onMyCarClick,
  onDriverLicenseClick,
  docType,
}) {
    return ( 
        <div className="mb-5 flex flex-wrap gap-4">
      <button
        onClick={onMyCarClick}
        className={`rounded-full py-2 text-sm font-semibold transition-all ${
          docType === "MyCar"
            ? "text-[#2389E3] bg-transparent hover:text-[#000000]"
            : "text-[#697C8C] bg-transparent hover:text-[#2389E3]"
        }`}
      >
       My Cars
      </button>

      <button
        onClick={onDriverLicenseClick}
        className={`rounded-full py-2 text-sm font-semibold transition-all ${
          docType === "DriversLicense"
            ? "text-[#2389E3] bg-transparent hover:text-[#000000]"
            : "text-[#697C8C] bg-transparent hover:text-[#2389E3]"
        }`}
      >
        My Driver's License
      </button>


    </div>
     );
}

export default DocumentsNav;