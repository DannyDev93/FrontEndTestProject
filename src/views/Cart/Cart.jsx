import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import CartSummary from "../../components/CartSummary/CartSummary";
import CartProductSummary from "../../components/CartProductSummary/CartProductSummary";

function Cart() {
  const product_array = useSelector((state) => state.array);
  const navigate = useNavigate();
  useEffect(() => {
    if (product_array?.length < 1) {
      navigate("/");
    }
  }, [product_array]);
  return (
    <>
      <div className="cart-container">
        <div className="cart-left">
          <div className="card-left-summary">
            <h2>RESUMEN DE LA COMPRA</h2>
            {product_array?.map((product, index) => {
              return (
                <CartProductSummary
                  key={index}
                  product={product}
                  index={index}
                />
              );
            })}
          </div>
        </div>
        <div className="cart-right">
          <h2>CARRITO</h2>
          <CartSummary products={product_array} />
        </div>
      </div>
    </>
  );
}

export default Cart;
