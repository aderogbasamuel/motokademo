import { useState } from "react";
import { Search } from "lucide-react";
import  {Icon}  from "@iconify/react";
export default function SearchBar({ onSearch, searchTerm, setSearchTerm }) {
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    // <div className="relative mb-1">
    //   <div className="flex items-center rounded-full bg-[#ECEFF8] px-4 py-2.5">
    //     <Search color="#2389E3" size={20} className="mr-1" />
    //     <input
    //       type="text"
    //       placeholder="search"
    //       value={searchTerm}
    //       onChange={handleChange}
    //       className="ml-1 w-full bg-transparent text-base font-medium text-[#05243F]/60 outline-none placeholder:text-[#05243F]/30 hover:bg-[#FDF6E8] focus:bg-[#FDF6E8]"
    //     />
    //   </div>
    // </div>
      <div className="flex items-center gap-2">
            <div className="bg-[#E9EDF6] w-fit rounded-full p-1 text-[13px] flex items-center gap-2 ps-4">
                <Search
                  className="text-[#45A1F2]"
                />
                <input type="text"
                 placeholder="Search" 
                 value={searchTerm}
                 onChange={handleChange}
                 className="outline-0 border-none "/>
                <button className="bg-[#45A1F2] px-4 py-2 rounded-full text-white">Search</button>
            </div>
            <div className="rounded-full border-2 border-[#E1E6F4] h-full py-3 px-8">
              <Icon icon="rivet-icons:filter-solid" width="21" height="21" className="text-[#45A1F2] " />

            </div> 
            </div>
);
}
