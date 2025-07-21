import ProductsData from "../../../data/Products";
import ProductCard from "./productCard";
function ProductsList({selectedProduct,setSelectedProduct,setShowModal,filteredRules}) {
    console.log(selectedProduct)
    return (
        <>
        {filteredRules.length > 0 ? (
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 p-5">

                  {filteredRules.map((product, index) => (
                    // return <TrafficRuleCard
                    //   key={index}
                    //   title={rule.title}
                    //   image={rule.image}
                    //   fine={rule.fine}
                    // />;
                    <ProductCard
                    key={index}
                    product={product}
                    imageUrl={product.imageUrl}
                    description={product.description}
                    title={product.title}
                    price={product.price}
                    setSelectedProduct={ setSelectedProduct}
                    setShowModal={setShowModal}
                    // setShowModal={setShowModal}
                />
                  ))}
</div>
                ) : (
                    <>
                     {ProductsData.map((products,index)=>(
                <div className="p-5" key={index}> 
                    <div className="flex justify-between text-[15px] text-[#697C8C] font-[600] mb-4">
                        <p className="text-[#EBB850]">{products.category}</p>
                        <p>See All</p>
                    </div>
                <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
                {products.productInfo.map((product)=>(
                        <ProductCard
                            key={product.id}
                            product={product}
                            imageUrl={product.imageUrl}
                            description={product.description}
                            title={product.title}
                            price={product.price}
                            setSelectedProduct={ setSelectedProduct}
                            setShowModal={setShowModal}
                            // setShowModal={setShowModal}
                        />
                    ))}
        
                </div>
                </div>
                    ))
                } 
                </>
                //   <p className="text-sm text-[#05243F]/60">
                //     No traffic rules found for this category.
                //   </p>
                )}
            </>
     );
}

export default ProductsList;