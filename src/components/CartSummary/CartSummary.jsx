import { useEffect, useState } from "react";
import { FaCcPaypal } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";

function CartSummary(props) {
  const [producNames, setProductNames] = useState([]);
  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    if (props?.products && props?.products?.length > 0) {
      let productNamesArray = [];
      let totalPriceTemp = 0;
      props?.products?.forEach((product) => {
        productNamesArray.push({
          product_name: product?.name,
          product_price: product?.price,
        });
        totalPriceTemp += parseInt(product?.price);
      });
      setProductNames(productNamesArray);
      setTotalPrice(totalPriceTemp);
    }
  }, [props?.products]);

  return (
    <>
      <div className="cart-summary">
        <h2>OBJECTOS EN EL CARRO</h2>
        <div className="cart-summary-top">
          {producNames.map((item, index) => {
            return (
              <div key={index}>
                <p>{item?.product_name}</p>
                <p>${item?.product_price}</p>
              </div>
            );
          })}
        </div>

        <div className="cart-summary-bottom">
          <p>TOTAL</p>
          <p>${totalPrice}</p>
        </div>
      </div>
      <div className="summary-payment-container">
        <h2>MEDIO DE PAGO</h2>
        <div className="payment-cards">
          <a className="payment-card">
            <FaCcPaypal />
          </a>
          <a className="payment-card">
            <FaCreditCard />
          </a>
          <a className="payment-card">
            <FaCcApplePay />
          </a>
        </div>
      </div>
    </>
  );
}

export default CartSummary;
