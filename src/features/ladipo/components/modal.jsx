function ProductModal({selectedProduct}) {
    return (
        <div className="flex "> 
        <div className="flex-1 p-5 px-8">
            <p className="font-[600] text-[#05243F] text-[24px]">{selectedProduct.description}</p>
            <p className="text-[14px] font-[600] py-2 pb-10">Price: <span className="text-[#2284DB]"> {selectedProduct.price}</span></p>
            <div className="border-1 border-[#E8E9EB] rounded-[16px]">
            <img src={selectedProduct.imageUrl} alt="" />
            </div>
        </div>
        <div className="flex-1">

            <p className="text-[13px]">
            {selectedProduct?.moreDetails?.keyFeatures}
            </p>
        </div>
        </div>
     );
}

export default ProductModal;