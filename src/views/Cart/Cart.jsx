import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import CartSummary from "../../components/CartSummary/CartSummary";
import CartProductSummary from "../../components/CartProductSummary/CartProductSummary";

function Cart() {
  const product_array = useSelector((state) => state.array);
  const navigate = useNavigate();
  useEffect(() => {
    const itemStorage = JSON.parse(localStorage.getItem("frontend_test_cart"));
    if (itemStorage?.length == null || itemStorage?.length < 1) {
      navigate("/FrontEndTestProject/");
    }
  });
  return (
    <>
      <div className="cart-container">
        <div className="cart-left">
          <div className="card-left-summary">
            <h2>SUMMARY</h2>
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
          <h2>CART</h2>
          <CartSummary products={product_array} />
        </div>
      </div>
    </>
  );
}

export default Cart;
