import { useEffect, useState } from "react";
import { getProducts } from "../../lib/apis/services";
import ProductCard from "../../components/ProductCard/ProductCard";

function Store() {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const products = await getProducts();
    if (products && products?.length > 0) {
      setProducts(products);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div className="store-container">
        {products.map((product) => {
          return (
            <ProductCard
              key={product?.id}
              id={product?.id}
              name={product?.product_name}
              img={product?.product_img}
              description={product?.product_description}
              price={product?.product_price}
            />
          );
        })}
      </div>
    </>
  );
}

export default Store;
