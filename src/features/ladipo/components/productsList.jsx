import ProductsData from "../../../data/Products";
import ProductCard from "./productCard";
function ProductsList() {
    return ( 
        <div className="grid grid-cols-4 gap-5 p-5">

            {ProductsData.map((product)=>(
                <ProductCard
                    key={product.id}
                    imageUrl={product.imageUrl}
                    description={product.description}
                    title={product.title}
                    price={product.price}
                />
            ))
            }
        </div>
     );
}

export default ProductsList;