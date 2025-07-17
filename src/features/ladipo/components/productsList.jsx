import ProductsData from "../../../data/Products";
import ProductCard from "./productCard";
function ProductsList({selectedProduct,setSelectedProduct,setShowModal}) {
    console.log(selectedProduct)
    return (
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
     );
}

export default ProductsList;