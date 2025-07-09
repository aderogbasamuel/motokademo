function DocumentsNav({
  activeTab = "license",
  onLicenseClick,
  onGarageClick,
}) {
    return ( 
        <div className="mb-5 flex flex-wrap gap-2 sm:gap-3">
      <button
        onClick={onLicenseClick}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition-all hover:shadow-md ${
          activeTab === "license"
            ? "text-[#2389E3] bg-transparent hover:text-[#1b6dbd]"
            : "text-[#697C8C] bg-transparent hover:text-[#d1d6e0]"
        }`}
      >
       My Cars
      </button>

      <button
        onClick={onGarageClick}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition-all hover:shadow-md ${
          activeTab === "DriversLicense"
            ? "text-[#2389E3] bg-transparent hover:text-[#1b6dbd]"
            : "text-[#697C8C] bg-transparent hover:text-[#d1d6e0]"
        }`}
      >
        My Driver's License
      </button>


    </div>
     );
}

export default DocumentsNav;