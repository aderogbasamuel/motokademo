import { Plus } from "lucide-react";

function ProductCard({title,imageUrl,description,price}) {
    return ( 
        <div className="flex flex-col  text-[13px] w-[187px]">
            <div className="border-1 border-[#D3D9DE4D] rounded-[10px] p-5 h-[189px] relative">
                <div className="bg-[#697B8C4A] text-white rounded-[5px] w-fit absolute right-3 top-3"><Plus/></div>
                <img src={imageUrl} alt="" />
            </div>
            <div>
                <p className="font-[600] text-[#05243F] py-2">{description}</p>
                <p className="text-[#697C8C] ">{title}</p>
                <p className="text-[#2389E3] font-[600] py-2">{price}</p>
                <button className="rounded-full py-2 w-full bg-[#D3D9DE] text-white">Add to Cart</button>
            </div>
        </div>
     );
}

export default ProductCard;