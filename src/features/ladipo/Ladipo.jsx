import { Icon } from "@iconify/react";
import LadipoLayout from "./components/LadipoLayout";
import { ChevronLeft, Cog, Sparkles, Menu } from "lucide-react"
import Categories from "./components/Categories";
import ProductsList from "./components/productsList";
function Ladipo() {
    return ( 
        <LadipoLayout
      title="Ladipo"
    >
      {/* Licenses Types */}
      {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {licensesTypes.map((action, index) => (
          <Link
            key={index}
            to={action.link}
            className="group relative flex h-[161px] flex-col justify-between rounded-[20px] border border-[#05243F]/10 px-4 py-5 hover:border-0 hover:bg-[#FDF6E8]"
          >
            <div className="flex flex-col items-start gap-y-10">
              <div>
                {Array.isArray(action.icons) ? (
                  <div className="flex -space-x-0">
                    {action.icons.map((icon, index) => (
                      <div
                        key={index}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2389E3]/10 text-lg"
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2389E3]/10 text-lg">
                    {action.icon}
                  </div>
                )}
              </div>
              <div className="mt-auto flex w-full items-center justify-between">
                <h3
                  className="text-base leading-tight font-normal whitespace-pre-line text-[#05243F] group-hover:text-[#05243F]"
                  // style={{
                  //   transition: "color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                  // }}
                >
                  {action.title}
                </h3>
                <div
                  className="text-[#697B8C] group-hover:text-[#05243F]"
                  // style={{
                  //   transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                  // }}
                >
                  <IoIosArrowForward className="text-xl opacity-29" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div> */}
      <div>
        <div className="flex justify-between items-center border-b-2 border-[#05243F0D] pb-5 px-4 sm:px-5">

            <div className="bg-[#E9EDF6] w-fit rounded-full p-1 text-[13px] flex items-center gap-2 ps-4">
                <Icon
                    icon="ri:notification-4-fill"                
                    fontSize={20}
                    className="text-[#45A1F2]"
                />
                <input type="text" placeholder="Search"/>
                <button className="bg-[#45A1F2] px-4 py-2 rounded-full text-white">Search</button>
            </div>
            <div className="flex items-center gap-2">
            <p className="text-[#00000040] text-[13px]">Don’t know what to buy?</p>
            <div className="text-[13px]">
            <button className="flex items-center gap-2 bg-[#eeb441]  hover:bg-amber-600 text-white px-2 py-2 rounded-full shadow-sm transition-colors">
              <Sparkles className="h-4 w-4" fill="#fff" />
              <span>Ask Mo</span>
            </button>
          </div>
            </div>
        </div>
        <Categories/>
        <ProductsList/>
      </div>
    </LadipoLayout>

     );
}

export default Ladipo;